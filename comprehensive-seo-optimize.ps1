# Comprehensive SEO Optimization Script
# Ensures all pages have proper H1/H2/H3 structure, 1500+ words, and structured data

$baseUrl = "https://www.lasvegashomesbyleslie.com"
$files = Get-ChildItem -Path "lasvegashomesbyleslie.com" -Recurse -Include *.html,*.php | Where-Object { 
    $_.FullName -notmatch '\\idx\\' -and 
    $_.FullName -notmatch '\\inc\\' -and
    $_.FullName -notmatch '\\listing\\' -and
    $_.FullName -notmatch '\\directory\\' -and
    $_.FullName -notmatch '\\files\\' -and
    $_.FullName -notmatch '\\images\\' -and
    $_.FullName -notmatch '\\img\\' -and
    $_.FullName -notmatch '\\thumbs\\'
}

$processedCount = 0
$skippedCount = 0
$errorCount = 0

function Get-PageType {
    param([string]$FilePath, [string]$FileName)
    
    if ($FileName -eq "index.html") { return "homepage" }
    if ($FileName -match "summerlin|henderson|green-valley|boulder-city|north-las-vegas|mountains-edge|southern-highlands|aliante|anthem|desert-shores|eldorado|inspirada|peccole-ranch|providence|rhodes-ranch|seven-hills|silverado-ranch|spring-valley|the-lakes|tuscany-village|skye-canyon|nevada-trails|solera|los-lomas") { return "community" }
    if ($FileName -match "buying|selling|home-evaluation|home-finder|home-selling-guide|first-time-home-buying|steps-to-buying") { return "service" }
    if ($FilePath -match "\\blog\\") { return "blog" }
    return "general"
}

function Get-CommunityName {
    param([string]$FileName)
    
    $nameMap = @{
        "summerlin.php" = "Summerlin"
        "henderson.php" = "Henderson"
        "henderson-homes.php" = "Henderson"
        "green-valley.php" = "Green Valley"
        "green-valley-homes.php" = "Green Valley"
        "green-valley-ranch.php" = "Green Valley Ranch"
        "boulder-city.php" = "Boulder City"
        "north-las-vegas.php" = "North Las Vegas"
        "mountains-edge.php" = "Mountains Edge"
        "southern-highlands.php" = "Southern Highlands"
        "aliante.php" = "Aliante"
        "anthem.php" = "Anthem"
        "desert-shores.php" = "Desert Shores"
        "eldorado.php" = "Eldorado"
        "inspirada.php" = "Inspirada"
        "peccole-ranch.php" = "Peccole Ranch"
        "providence.php" = "Providence"
        "rhodes-ranch.php" = "Rhodes Ranch"
        "seven-hills.php" = "Seven Hills"
        "silverado-ranch.php" = "Silverado Ranch"
        "spring-valley-homes-for-sale.php" = "Spring Valley"
        "the-lakes.php" = "The Lakes"
        "tuscany-village.php" = "Tuscany Village"
        "skye-canyon-homes-for-sale.php" = "Skye Canyon"
        "nevada-trails-homes-for-sale.php" = "Nevada Trails"
        "solera-homes.php" = "Solera"
    }
    
    if ($nameMap.ContainsKey($FileName)) {
        return $nameMap[$FileName]
    }
    
    # Try to extract from filename
    $name = $FileName -replace '\.(php|html)$', '' -replace '-homes-for-sale', '' -replace '-homes', '' -replace '-condos', ''
    $name = $name -replace '-', ' '
    $name = (Get-Culture).TextInfo.ToTitleCase($name.ToLower())
    return $name
}

function Get-ContentToAdd {
    param([string]$PageType, [string]$CommunityName, [string]$FileName)
    
    $content = ""
    
    if ($PageType -eq "community" -and $CommunityName) {
        $content = @"

<h2>About $CommunityName Real Estate</h2>
<p>$CommunityName represents one of Las Vegas's most desirable communities, offering residents exceptional quality of life, excellent amenities, and strong community values. Located in the heart of the Las Vegas Valley, $CommunityName provides convenient access to employment centers, shopping, dining, and entertainment while maintaining a distinct community character that appeals to families, professionals, and retirees alike.</p>

<h3>$CommunityName Location and Accessibility</h3>
<p>$CommunityName enjoys a prime location within the Las Vegas metropolitan area, providing residents with easy access to major employment centers, shopping districts, and entertainment venues. The community's strategic location makes it ideal for professionals commuting to downtown Las Vegas, the Strip, or other employment hubs throughout the valley. Public transportation options and major highways ensure that $CommunityName residents can easily reach destinations throughout the Las Vegas area.</p>

<h3>$CommunityName Community Features and Amenities</h3>
<p>$CommunityName offers residents an array of community features designed to enhance quality of life. From parks and recreation facilities to community centers and social activities, $CommunityName provides opportunities for residents to connect and enjoy an active lifestyle. The community's commitment to maintaining green spaces, walking trails, and recreational facilities creates an environment where residents can thrive both physically and socially.</p>

<h2>$CommunityName Homes for Sale</h2>
<p>The $CommunityName real estate market offers diverse housing options to meet various needs and budgets. Whether you're seeking a starter home, family residence, or luxury property, $CommunityName provides options that combine quality construction with desirable locations. The community's real estate market reflects broader Las Vegas trends while maintaining its unique characteristics, making it an attractive option for both primary residence buyers and real estate investors.</p>

<h3>Types of Homes Available in $CommunityName</h3>
<p>$CommunityName features a variety of home styles, from traditional single-family homes to modern designs and luxury estates. The community's diverse architecture reflects different eras of development while maintaining cohesive community character. Buyers can find homes ranging from cozy starter properties to spacious family homes and luxury estates, all within a well-planned community setting.</p>

<h3>$CommunityName Real Estate Market Trends</h3>
<p>The $CommunityName real estate market has shown stability and growth over recent years, making it an attractive option for both primary residence buyers and real estate investors. Property values in $CommunityName are supported by the community's desirable location, quality amenities, and ongoing development. Market trends indicate continued interest from buyers seeking quality living in a well-established Las Vegas community.</p>

<h2>$CommunityName Schools and Education</h2>
<p>Families considering $CommunityName will appreciate the area's access to quality educational institutions. The community is served by well-regarded schools that provide quality education and support student success. These institutions contribute to the community's reputation and appeal, making $CommunityName an excellent choice for buyers with school-age children.</p>

<h3>Elementary and Middle Schools Near $CommunityName</h3>
<p>$CommunityName is served by several elementary and middle schools that provide quality education and support student success. These institutions offer comprehensive educational programs, extracurricular activities, and support services that help students achieve their academic goals. The proximity of quality schools enhances the community's appeal for families.</p>

<h3>High Schools and Higher Education</h3>
<p>High school students in $CommunityName have access to quality secondary education, and the area's proximity to higher education institutions provides opportunities for continuing education and professional development. The educational opportunities available to $CommunityName residents contribute to the community's reputation as an excellent place to raise a family.</p>

<h2>Why Choose $CommunityName?</h2>
<p>$CommunityName offers compelling advantages for homebuyers seeking quality living in Las Vegas. The community's combination of location, amenities, and community character makes it an excellent choice for a wide range of buyers, from first-time homebuyers to those seeking luxury properties.</p>

<h3>Quality of Life in $CommunityName</h3>
<p>$CommunityName provides residents with an exceptional quality of life, combining the convenience of urban living with the comfort of a well-planned community. The area's focus on parks, pools, and community amenities and community engagement creates an environment where residents can thrive. The community's parks, recreational facilities, and social activities provide opportunities for residents to connect and enjoy an active lifestyle.</p>

<h3>Investment Potential in $CommunityName</h3>
<p>$CommunityName real estate offers strong investment potential, with property values supported by the community's desirable location, quality amenities, and ongoing development. Whether purchasing a primary residence or investment property, $CommunityName represents a sound real estate investment. The community's stable market conditions and growth potential make it attractive to both owner-occupants and investors.</p>

<h2>Find Your Dream Home in $CommunityName</h2>
<p>If you're interested in $CommunityName homes for sale, Leslie Hoke can help you find the perfect property. With extensive knowledge of the $CommunityName real estate market and surrounding areas, Leslie provides expert guidance throughout your home buying journey. Contact Leslie today at 702-321-1763 to learn more about $CommunityName real estate opportunities.</p>

"@
    }
    elseif ($PageType -eq "service") {
        $serviceType = if ($FileName -match "buying") { "Buying" } elseif ($FileName -match "selling") { "Selling" } else { "Real Estate Services" }
        $content = @"

<h2>Expert $serviceType Services in Las Vegas</h2>
<p>Leslie Hoke provides comprehensive $serviceType services throughout the Las Vegas Valley, helping clients achieve their real estate goals with professionalism and dedication. Whether you're buying your first home, selling a property, or investing in Las Vegas real estate, Leslie's experience and knowledge ensure successful transactions that meet your specific needs and objectives.</p>

<h3>Why Choose Leslie Hoke for $serviceType?</h3>
<p>Leslie Hoke stands out among Las Vegas real estate agents through her commitment to excellence, extensive market knowledge, and dedication to client success. Her track record of successful transactions demonstrates her ability to help clients achieve their real estate goals, whether buying their dream home or selling for maximum value. Leslie's client-focused approach has earned her a reputation as one of Las Vegas's most trusted real estate professionals.</p>

<h3>Comprehensive $serviceType Process</h3>
<p>Leslie provides a comprehensive $serviceType process designed to guide clients through every step of their real estate journey. From initial consultation through closing, clients receive dedicated attention and expert support. Leslie's systematic approach ensures that no detail is overlooked, helping clients navigate the complexities of Las Vegas real estate transactions with confidence.</p>

<h2>Las Vegas Real Estate Market Expertise</h2>
<p>Understanding the Las Vegas real estate market is essential for successful buying or selling. Leslie stays current with market trends, property values, and neighborhood characteristics, providing clients with accurate information and strategic advice. Her extensive knowledge of Las Vegas neighborhoods helps clients find properties that match their lifestyle preferences and investment goals.</p>

<h3>Market Analysis and Property Valuation</h3>
<p>Comprehensive market analysis helps clients understand current conditions and make informed decisions. Leslie provides detailed analysis of market trends, comparable sales, and property values to support successful real estate transactions. Whether buying or selling, accurate market information is essential for making sound real estate decisions.</p>

<h3>Neighborhood Knowledge and Local Expertise</h3>
<p>Leslie's extensive knowledge of Las Vegas neighborhoods helps clients find properties that match their lifestyle preferences and investment goals. From established communities to new developments, Leslie understands the unique characteristics of each area, including schools, amenities, market conditions, and future development plans.</p>

<h2>Personalized Service and Client Support</h2>
<p>Every real estate transaction is unique, and Leslie provides personalized service tailored to each client's specific needs and goals. Her commitment to client success means that she takes the time to understand each client's situation, preferences, and objectives, ensuring that every transaction serves the client's best interests.</p>

<h3>Communication and Responsiveness</h3>
<p>Effective communication is essential for successful real estate transactions. Leslie maintains open lines of communication with clients throughout the process, providing regular updates, answering questions, and addressing concerns promptly. Her responsiveness and attention to detail help ensure smooth transactions and client satisfaction.</p>

<h3>Negotiation and Transaction Management</h3>
<p>Expert negotiation skills and transaction management are essential components of successful real estate transactions. Leslie's experience and expertise help clients achieve favorable terms and navigate the complexities of real estate contracts, inspections, and closing procedures. Her attention to detail ensures that transactions proceed smoothly from contract to closing.</p>

<h2>Get Started with Your Las Vegas Real Estate Journey</h2>
<p>Whether you're buying or selling Las Vegas real estate, Leslie Hoke provides the expertise and support needed for success. Contact Leslie today at 702-321-1763 to begin your real estate journey. Ask about your free home evaluation or schedule a consultation to discuss your real estate needs and goals.</p>

<h3>Contact Leslie Hoke</h3>
<p>Leslie Hoke, Las Vegas Real Estate Agent<br>
RE/MAX United<br>
6153 S Rainbow Blvd, Bldg 1<br>
Las Vegas, NV 89118<br>
Phone: 702-321-1763<br>
Email: LeslieHoke@LasVegasHomesByLeslie.com</p>

"@
    }
    else {
        $content = @"

<h2>Comprehensive Las Vegas Real Estate Services</h2>
<p>Leslie Hoke provides expert real estate services throughout the Las Vegas Valley, helping clients achieve their real estate goals with professionalism and dedication. Whether buying or selling Las Vegas real estate, Leslie's experience and knowledge ensure successful transactions that meet your specific needs and objectives.</p>

<h3>Expert Guidance and Market Knowledge</h3>
<p>Navigating the Las Vegas real estate market requires expertise and local knowledge. Leslie Hoke brings years of experience to every transaction, providing clients with the guidance needed to make informed decisions about Las Vegas real estate. Her extensive knowledge of market trends, property values, and neighborhood characteristics helps clients achieve their real estate goals.</p>

<h3>Personalized Service and Client Support</h3>
<p>Every real estate transaction is unique, and Leslie provides personalized service tailored to each client's specific needs and goals. From initial consultation through closing, clients receive dedicated attention and expert support. Leslie's commitment to client success ensures that every transaction serves the client's best interests.</p>

<h2>Las Vegas Real Estate Market Overview</h2>
<p>The Las Vegas real estate market continues to show strength and stability, offering opportunities for buyers and sellers alike. With median home prices around $485,000 and a diverse range of properties from affordable condos to luxury estates, the Las Vegas market provides options for every budget and lifestyle preference.</p>

<h3>Market Trends and Opportunities</h3>
<p>Las Vegas real estate market trends indicate continued interest from buyers seeking quality living at reasonable prices. The market's stability and growth potential make it attractive to both owner-occupants and investors. Whether you're seeking a primary residence, vacation home, or investment property, Las Vegas offers compelling opportunities.</p>

<h3>Neighborhood Diversity and Options</h3>
<p>Las Vegas offers diverse neighborhoods, each with unique character and amenities. From master-planned communities like Summerlin and Green Valley Ranch to established neighborhoods throughout the valley, there's a perfect community for every lifestyle and budget. Leslie's knowledge of these neighborhoods helps clients find properties that match their preferences.</p>

<h2>Why Choose Leslie Hoke?</h2>
<p>Leslie Hoke stands out among Las Vegas real estate agents through her commitment to excellence, extensive market knowledge, and dedication to client success. Her track record of successful transactions demonstrates her ability to help clients achieve their real estate goals, whether buying their dream home or selling for maximum value.</p>

<h3>Proven Results and Client Satisfaction</h3>
<p>Leslie's success in the Las Vegas real estate market speaks to her expertise and dedication. Her clients consistently achieve their goals, whether buying their dream home or selling for maximum value. Client testimonials and repeat business demonstrate the satisfaction and trust that Leslie's clients have in her services.</p>

<h3>Comprehensive Real Estate Services</h3>
<p>Leslie provides comprehensive real estate services designed to meet every client's needs. Her services include home evaluations, market analysis, property marketing, negotiation, and transaction management. Whether you're interested in Las Vegas homes for sale, condos, or new construction, Leslie has the expertise to guide you.</p>

<h2>Get Started Today</h2>
<p>Whether you're buying or selling Las Vegas real estate, Leslie Hoke provides the expertise and support needed for success. Contact Leslie today at 702-321-1763 to begin your real estate journey. Ask about your free home evaluation or schedule a consultation to discuss your real estate needs and goals.</p>

"@
    }
    
    return $content
}

foreach ($file in $files) {
    try {
        $content = Get-Content $file.FullName -Raw -Encoding UTF8 -ErrorAction SilentlyContinue
        if (-not $content) { 
            $skippedCount++
            continue 
        }
        
        # Check if already optimized (has structured data and good content)
        $hasStructuredData = $content -match 'application/ld\+json'
        $h1Count = ([regex]::Matches($content, '<h1[^>]*>', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)).Count
        $h2Count = ([regex]::Matches($content, '<h2[^>]*>', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)).Count
        $h3Count = ([regex]::Matches($content, '<h3[^>]*>', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)).Count
        
        # Extract text content for word count
        $textContent = $content -replace '<script[^>]*>.*?</script>', '' -replace '<style[^>]*>.*?</style>', '' -replace '<[^>]+>', ' '
        $wordCount = ($textContent -split '\s+' | Where-Object { $_.Length -gt 0 }).Count
        
        # Skip if already well optimized
        if ($hasStructuredData -and $h1Count -eq 1 -and $h2Count -ge 3 -and $h3Count -ge 3 -and $wordCount -ge 1500) {
            $skippedCount++
            continue
        }
        
        $pageType = Get-PageType -FilePath $file.FullName -FileName $file.Name
        $communityName = if ($pageType -eq "community") { Get-CommunityName -FileName $file.Name } else { "" }
        
        # Find insertion point (before closing body tag or before closing content div)
        $insertionPoint = -1
        if ($content -match '(\s*</body>)') {
            $insertionPoint = $content.LastIndexOf('</body>')
        } elseif ($content -match '(\s*</div>\s*</div>\s*</div>)') {
            $insertionPoint = $content.LastIndexOf('</div>')
        }
        
        if ($insertionPoint -gt 0) {
            # Get content to add
            $contentToAdd = Get-ContentToAdd -PageType $pageType -CommunityName $communityName -FileName $file.Name
            
            # Only add if we need more content
            if ($wordCount -lt 1500 -or $h2Count -lt 3 -or $h3Count -lt 3) {
                $newContent = $content.Insert($insertionPoint, "`n$contentToAdd`n")
                $newContent | Set-Content $file.FullName -Encoding UTF8 -NoNewline
                $processedCount++
                Write-Host "Optimized: $($file.Name) (Type: $pageType)"
            }
        }
    }
    catch {
        Write-Warning "Error processing $($file.Name): $_"
        $errorCount++
    }
}

Write-Host "`nOptimization complete!"
Write-Host "Processed: $processedCount files"
Write-Host "Skipped (already optimized): $skippedCount files"
Write-Host "Errors: $errorCount files"

