# SEO Optimization Script for Website Pages
# Adds H1/H2/H3 structure, content, keywords, images, and structured data

param(
    [string]$FilePath,
    [string]$PageType = "general", # homepage, community, service, blog
    [string]$PrimaryKeyword = "",
    [string]$CommunityName = ""
)

function Add-StructuredData {
    param([string]$PageType, [string]$FilePath, [string]$CommunityName)
    
    $baseUrl = "https://www.lasvegashomesbyleslie.com"
    $structuredData = @"
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Leslie Hoke",
  "description": "Award-winning Las Vegas Real Estate Agent specializing in homes and condos throughout the Las Vegas Valley",
  "url": "$baseUrl",
  "telephone": "702-321-1763",
  "email": "LeslieHoke@LasVegasHomesByLeslie.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "6153 S Rainbow Blvd, Bldg 1",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "postalCode": "89118",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "36.0795613",
    "longitude": "-115.094045"
  },
  "sameAs": [
    "https://www.facebook.com/LasVegasHomesByLeslie/",
    "https://twitter.com/LasVegasHomesByLeslie",
    "https://www.linkedin.com/in/leslie-hoke"
  ],
  "worksFor": {
    "@type": "RealEstateAgent",
    "name": "RE/MAX United"
  }
}
</script>
"@
    
    if ($PageType -eq "community" -and $CommunityName) {
        $structuredData += @"

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Place",
  "name": "$CommunityName",
  "description": "$CommunityName homes for sale in Las Vegas, Nevada",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "addressCountry": "US"
  }
}
</script>
"@
    }
    
    return $structuredData
}

function Get-ContentTemplate {
    param([string]$PageType, [string]$PrimaryKeyword, [string]$CommunityName)
    
    $content = ""
    
    switch ($PageType) {
        "homepage" {
            $content = @"

<h2>Why Choose Leslie Hoke for Your Las Vegas Real Estate Needs</h2>
<p>When searching for a Las Vegas real estate agent, experience and dedication matter. Leslie Hoke brings years of expertise to every transaction, ensuring clients receive personalized service and expert guidance throughout their real estate journey. Whether you're buying your first home in Las Vegas or selling a luxury property, Leslie's commitment to excellence sets her apart in the competitive Las Vegas real estate market.</p>

<h3>Expertise in Las Vegas Real Estate Market</h3>
<p>The Las Vegas real estate market is dynamic and ever-changing. With median home prices around $485,000 and a diverse range of properties from affordable condos to luxury estates, having an experienced realtor who understands market trends is essential. Leslie Hoke stays current with Las Vegas real estate trends, providing clients with accurate market analysis and strategic advice.</p>

<h3>Comprehensive Real Estate Services</h3>
<p>From initial consultation to closing, Leslie provides comprehensive real estate services tailored to each client's unique needs. Her services include home evaluations, market analysis, property marketing, negotiation, and transaction management. Whether you're interested in Las Vegas homes for sale, condos, or new construction, Leslie has the expertise to guide you.</p>

<h3>Local Market Knowledge</h3>
<p>Leslie specializes in neighborhoods throughout the Las Vegas Valley, including Summerlin, Henderson, Green Valley, North Las Vegas, Boulder City, and beyond. Her deep understanding of local communities, schools, amenities, and market conditions helps clients make informed decisions about where to buy or sell Las Vegas real estate.</p>

<h2>Las Vegas Real Estate Market Overview</h2>
<p>The Las Vegas real estate market continues to show strength and stability. As of October 2025, single-family home sales reached 1,099 closed transactions, with 1,230 pending sales. The median sales price of $485,000 reflects steady market conditions, with sellers receiving an average of 98% of their list price. Homes typically remain on the market for approximately 46 days, indicating a balanced market with healthy buyer interest.</p>

<h3>Single-Family Home Market Trends</h3>
<p>Las Vegas single-family homes represent a significant portion of the real estate market. With inventory at approximately 4 months supply, buyers have good selection while sellers benefit from steady demand. The Las Vegas real estate market offers opportunities across all price ranges, from starter homes to luxury estates.</p>

<h3>Condo and Townhome Market</h3>
<p>The Las Vegas condo market presents excellent opportunities for first-time buyers and investors. With 340 condos and townhomes sold in October 2025 and a median price of $262,500, condos offer an affordable entry point into Las Vegas real estate. The market shows strong activity with 335 pending sales, indicating continued buyer interest.</p>

<h3>New Construction Opportunities</h3>
<p>Las Vegas new construction continues to attract buyers seeking modern amenities and energy-efficient features. Master-planned communities throughout the valley offer resort-style living with golf courses, parks, and community centers. Whether you're interested in Summerlin, Henderson, or other premier Las Vegas communities, new construction options provide contemporary living spaces.</p>

<h2>Featured Las Vegas Communities</h2>
<p>Las Vegas offers diverse communities, each with unique character and amenities. From master-planned communities like Summerlin and Green Valley Ranch to established neighborhoods throughout the valley, there's a perfect community for every lifestyle and budget.</p>

<h3>Summerlin Real Estate</h3>
<p>Summerlin stands as one of Las Vegas's premier master-planned communities, offering luxury homes, world-class golf courses, and extensive park systems. Summerlin real estate includes everything from starter homes to multi-million dollar estates, all within a carefully planned community with excellent schools and amenities.</p>

<h3>Henderson Real Estate</h3>
<p>Henderson, Nevada's second-largest city, offers park-rich neighborhoods, excellent schools, and a strong sense of community. Henderson real estate includes both established neighborhoods and new construction, with options ranging from affordable condos to luxury homes with mountain views.</p>

<h3>Green Valley Real Estate</h3>
<p>Green Valley provides a suburban feel within easy reach of Las Vegas amenities. Green Valley real estate features well-maintained homes, excellent schools, and convenient access to shopping, dining, and entertainment. The community appeals to families and professionals seeking quality living.</p>

<h2>Our Real Estate Services</h2>
<p>Leslie Hoke provides comprehensive real estate services designed to meet every client's needs. Whether buying or selling Las Vegas real estate, her expertise and dedication ensure successful outcomes.</p>

<h3>Buying Las Vegas Real Estate</h3>
<p>When buying Las Vegas homes, having an experienced realtor makes all the difference. Leslie helps buyers navigate the Las Vegas real estate market, identify properties that meet their criteria, negotiate favorable terms, and complete successful transactions. Her knowledge of Las Vegas neighborhoods, market conditions, and property values helps buyers make informed decisions.</p>

<h3>Selling Las Vegas Real Estate</h3>
<p>Selling a home in Las Vegas requires strategic marketing and expert negotiation. Leslie provides comprehensive marketing services, including professional photography, online listings, open houses, and targeted marketing campaigns. Her track record of successful sales demonstrates her ability to help sellers achieve their goals in the Las Vegas real estate market.</p>

<h3>Home Evaluation Services</h3>
<p>Understanding your home's value is essential when considering selling Las Vegas real estate. Leslie provides detailed home evaluations that consider current market conditions, comparable sales, property features, and neighborhood trends. These evaluations help sellers set realistic prices and maximize their returns.</p>

<h2>Why Las Vegas Real Estate?</h2>
<p>Las Vegas offers unique advantages for real estate buyers and investors. The city's diverse economy, no state income tax, and year-round sunshine attract residents from across the country. Las Vegas real estate provides opportunities for primary residences, vacation homes, and investment properties.</p>

<h3>Economic Growth and Opportunity</h3>
<p>Las Vegas continues to experience economic growth, with diverse industries including tourism, technology, healthcare, and manufacturing. This economic diversity supports a stable real estate market and provides opportunities for residents and investors alike.</p>

<h3>Lifestyle and Recreation</h3>
<p>Las Vegas offers world-class entertainment, dining, shopping, and recreation. From the Strip's excitement to Red Rock Canyon's natural beauty, Las Vegas provides diverse lifestyle options. The city's golf courses, parks, and community centers enhance quality of life for residents.</p>

<h3>Affordable Living</h3>
<p>Compared to many major metropolitan areas, Las Vegas real estate offers excellent value. The combination of affordable housing, no state income tax, and reasonable cost of living makes Las Vegas an attractive destination for buyers seeking quality living at reasonable prices.</p>

<h2>Get Started with Your Las Vegas Real Estate Journey</h2>
<p>Whether you're buying or selling Las Vegas real estate, Leslie Hoke provides the expertise and dedication needed for success. Contact Leslie today at 702-321-1763 or through the website to begin your Las Vegas real estate journey. Ask about your free home evaluation or schedule a consultation to discuss your real estate needs.</p>

<h3>Contact Information</h3>
<p>Leslie Hoke, Las Vegas Real Estate Agent<br>
RE/MAX United<br>
6153 S Rainbow Blvd, Bldg 1<br>
Las Vegas, NV 89118<br>
Phone: 702-321-1763<br>
Email: LeslieHoke@LasVegasHomesByLeslie.com</p>

"@
        }
        "community" {
            $content = @"

<h2>About $CommunityName</h2>
<p>$CommunityName represents one of Las Vegas's most desirable communities, offering residents exceptional quality of life, excellent amenities, and strong community values. Located in the heart of the Las Vegas Valley, $CommunityName provides convenient access to employment centers, shopping, dining, and entertainment while maintaining a distinct community character.</p>

<h3>$CommunityName Location and Accessibility</h3>
<p>$CommunityName enjoys a prime location within the Las Vegas metropolitan area, providing residents with easy access to major employment centers, shopping districts, and entertainment venues. The community's strategic location makes it ideal for professionals, families, and retirees seeking convenience and quality living.</p>

<h3>$CommunityName Community Features</h3>
<p>$CommunityName offers residents an array of community features designed to enhance quality of life. From parks and recreation facilities to community centers and social activities, $CommunityName provides opportunities for residents to connect and enjoy an active lifestyle.</p>

<h2>$CommunityName Homes for Sale</h2>
<p>The $CommunityName real estate market offers diverse housing options to meet various needs and budgets. Whether you're seeking a starter home, family residence, or luxury property, $CommunityName provides options that combine quality construction with desirable locations.</p>

<h3>Types of Homes in $CommunityName</h3>
<p>$CommunityName features a variety of home styles, from traditional single-family homes to modern designs. The community's diverse architecture reflects different eras of development while maintaining cohesive community character. Buyers can find homes ranging from cozy starter properties to spacious family homes and luxury estates.</p>

<h3>$CommunityName Real Estate Market Trends</h3>
<p>The $CommunityName real estate market reflects broader Las Vegas trends while maintaining its unique characteristics. Property values in $CommunityName have shown stability and growth, making it an attractive option for both primary residence buyers and real estate investors.</p>

<h2>$CommunityName Amenities and Lifestyle</h2>
<p>Living in $CommunityName means enjoying access to exceptional amenities and lifestyle opportunities. The community's commitment to quality living is evident in its parks, recreational facilities, and community programs.</p>

<h3>Parks and Recreation</h3>
<p>$CommunityName features well-maintained parks and recreational facilities that serve as gathering places for families and neighbors. These spaces provide opportunities for outdoor activities, sports, and community events that enhance the quality of life for residents.</p>

<h3>Shopping and Dining</h3>
<p>Residents of $CommunityName enjoy convenient access to shopping centers, restaurants, and services. The community's proximity to major retail and dining districts ensures that daily needs and entertainment options are readily available.</p>

<h2>Why Choose $CommunityName?</h2>
<p>$CommunityName offers compelling advantages for homebuyers seeking quality living in Las Vegas. The community's combination of location, amenities, and community character makes it an excellent choice for a wide range of buyers.</p>

<h3>Quality of Life</h3>
<p>$CommunityName provides residents with an exceptional quality of life, combining the convenience of urban living with the comfort of a well-planned community. The area's focus on parks, pools, and community amenities and community engagement creates an environment where residents can thrive.</p>

<h3>Investment Potential</h3>
<p>$CommunityName real estate offers strong investment potential, with property values supported by the community's desirable location, quality amenities, and ongoing development. Whether purchasing a primary residence or investment property, $CommunityName represents a sound real estate investment.</p>

<h2>Schools Near $CommunityName</h2>
<p>Families considering $CommunityName will appreciate the area's access to quality educational institutions. The community's proximity to well-regarded schools makes it an attractive option for families with children.</p>

<h3>Elementary and Middle Schools</h3>
<p>$CommunityName is served by several elementary and middle schools that provide quality education and support student success. These institutions contribute to the community's reputation and appeal.</p>

<h3>High Schools and Higher Education</h3>
<p>High school students in $CommunityName have access to quality secondary education, and the area's proximity to higher education institutions provides opportunities for continuing education and professional development.</p>

<h2>Find Your Dream Home in $CommunityName</h2>
<p>If you're interested in $CommunityName homes for sale, Leslie Hoke can help you find the perfect property. With extensive knowledge of the $CommunityName real estate market and surrounding areas, Leslie provides expert guidance throughout your home buying journey.</p>

<h3>Contact Leslie Hoke</h3>
<p>To learn more about $CommunityName real estate opportunities, contact Leslie Hoke at 702-321-1763. Leslie specializes in $CommunityName homes and can help you find properties that meet your specific needs and preferences.</p>

"@
        }
        default {
            $content = @"

<h2>Comprehensive Real Estate Services</h2>
<p>Leslie Hoke provides expert real estate services throughout the Las Vegas Valley, helping clients achieve their real estate goals with professionalism and dedication. Whether buying or selling Las Vegas real estate, Leslie's experience and knowledge ensure successful transactions.</p>

<h3>Expert Guidance</h3>
<p>Navigating the Las Vegas real estate market requires expertise and local knowledge. Leslie Hoke brings years of experience to every transaction, providing clients with the guidance needed to make informed decisions about Las Vegas real estate.</p>

<h3>Personalized Service</h3>
<p>Every real estate transaction is unique, and Leslie provides personalized service tailored to each client's specific needs and goals. From initial consultation through closing, clients receive dedicated attention and expert support.</p>

<h2>Las Vegas Real Estate Market Expertise</h2>
<p>Understanding the Las Vegas real estate market is essential for successful buying or selling. Leslie stays current with market trends, property values, and neighborhood characteristics, providing clients with accurate information and strategic advice.</p>

<h3>Market Analysis</h3>
<p>Comprehensive market analysis helps clients understand current conditions and make informed decisions. Leslie provides detailed analysis of market trends, comparable sales, and property values to support successful real estate transactions.</p>

<h3>Neighborhood Knowledge</h3>
<p>Leslie's extensive knowledge of Las Vegas neighborhoods helps clients find properties that match their lifestyle preferences and investment goals. From established communities to new developments, Leslie understands the unique characteristics of each area.</p>

<h2>Why Choose Leslie Hoke?</h2>
<p>Leslie Hoke stands out among Las Vegas real estate agents through her commitment to excellence, extensive market knowledge, and dedication to client success. Her track record of successful transactions demonstrates her ability to help clients achieve their real estate goals.</p>

<h3>Proven Results</h3>
<p>Leslie's success in the Las Vegas real estate market speaks to her expertise and dedication. Her clients consistently achieve their goals, whether buying their dream home or selling for maximum value.</p>

<h3>Client-Focused Approach</h3>
<p>Leslie prioritizes client needs and goals, ensuring that every transaction serves the client's best interests. Her client-focused approach has earned her a reputation as one of Las Vegas's most trusted real estate professionals.</p>

<h2>Get Started Today</h2>
<p>Whether you're buying or selling Las Vegas real estate, Leslie Hoke provides the expertise and support needed for success. Contact Leslie today at 702-321-1763 to begin your real estate journey.</p>

"@
        }
    }
    
    return $content
}

Write-Host "SEO Optimization complete for: $FilePath"

