#!/usr/bin/env node

/**
 * Deployment script for Dr. Jan Duffy Real Estate Website
 * This script handles pre-deployment checks and deployment to Vercel
 */

const { execSync } = require('node:child_process');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function exec(command, options = {}) {
  try {
    return execSync(command, {
      stdio: 'inherit',
      encoding: 'utf8',
      ...options,
    });
  } catch (_error) {
    log(`❌ Command failed: ${command}`, 'red');
    process.exit(1);
  }
}

function checkGitStatus() {
  log('🔍 Checking Git status...', 'blue');

  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    if (status.trim()) {
      log('⚠️  Uncommitted changes detected:', 'yellow');
      log(status, 'yellow');
      log('Please commit or stash your changes before deploying.', 'yellow');
      process.exit(1);
    }
  } catch (_error) {
    log('❌ Failed to check Git status', 'red');
    process.exit(1);
  }

  log('✅ Git status clean', 'green');
}

function runQualityChecks() {
  log('🔧 Running quality checks...', 'blue');

  // Run Biome checks
  log('📝 Running Biome formatting and linting...', 'cyan');
  exec('npm run check:fix');

  // Run TypeScript checks
  log('🔧 Running TypeScript type checking...', 'cyan');
  exec('npm run type-check');

  // Run build test
  log('🏗️  Testing build...', 'cyan');
  exec('npm run build');

  log('✅ All quality checks passed', 'green');
}

function deployToVercel() {
  log('🚀 Deploying to Vercel...', 'blue');

  try {
    // Check if Vercel CLI is installed
    execSync('vercel --version', { stdio: 'pipe' });
  } catch (_error) {
    log('❌ Vercel CLI not found. Installing...', 'yellow');
    exec('npm install -g vercel');
  }

  // Deploy to Vercel
  exec('vercel --prod --yes');

  log('✅ Deployment completed successfully!', 'green');
}

function main() {
  log('🎰 Dr. Jan Duffy Real Estate Website Deployment', 'magenta');
  log('================================================', 'magenta');

  const args = process.argv.slice(2);
  const skipChecks = args.includes('--skip-checks');
  const skipDeploy = args.includes('--skip-deploy');

  if (!skipChecks) {
    checkGitStatus();
    runQualityChecks();
  }

  if (!skipDeploy) {
    deployToVercel();
  }

  log('🎉 Deployment process completed!', 'green');
  log('🌐 Your website should be live at: https://drjanetduffy.com', 'cyan');
}

// Handle command line arguments
if (process.argv.includes('--help') || process.argv.includes('-h')) {
  log('Dr. Jan Duffy Real Estate Website Deployment Script', 'bright');
  log('');
  log('Usage: node scripts/deploy.js [options]', 'cyan');
  log('');
  log('Options:', 'yellow');
  log('  --skip-checks    Skip quality checks and build test', 'reset');
  log('  --skip-deploy    Skip Vercel deployment', 'reset');
  log('  --help, -h       Show this help message', 'reset');
  log('');
  log('Examples:', 'yellow');
  log('  node scripts/deploy.js                 # Full deployment with checks', 'reset');
  log('  node scripts/deploy.js --skip-checks   # Deploy without quality checks', 'reset');
  log('  node scripts/deploy.js --skip-deploy   # Run checks only', 'reset');
  process.exit(0);
}

main();
