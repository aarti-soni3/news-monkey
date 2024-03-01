import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  articles = [
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": null,
      "title": "Prince Harry loses High Court challenge over UK security levels - BBC.com",
      "description": "The Duke of Sussex fails to overturn a ruling which saw his security status downgraded in the UK.",
      "url": "https://www.bbc.com/news/uk-68421992",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/18206/production/_131922889_ace90c4a92ac8d3f6cb815fa951c317daeeef999.jpg",
      "publishedAt": "2024-02-28T14:12:20Z",
      "content": "Prince Harry has lost a High Court challenge against the government over the level of his security in the UK.\r\nThe Duke of Sussex failed to overturn a previous ruling which saw his security status do… [+6801 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Maggie Penman",
      "title": "A simple way to remove microplastics from drinking water - The Washington Post",
      "description": "New research shows boiling water is surprisingly effective at removing the ubiquitous tiny plastic particles.",
      "url": "https://www.washingtonpost.com/climate-solutions/2024/02/28/microplastics-drinking-water/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PRNOBELWFWSWEMQCFZV55HRAFQ_size-normalized.jpg&w=1440",
      "publishedAt": "2024-02-28T13:37:32Z",
      "content": "Tiny plastic particles can seem alarmingly ubiquitous and nearly impossible to get rid of theyve been found in food, breast milk and even clouds. But new research suggests that a simple solution coul… [+2975 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Fci Academy"
      },
      "author": "Doral Chenoweth, Kyle Robertson",
      "title": "Tornado confirmed in Madison County as severe weather hits central Ohio - The Columbus Dispatch",
      "description": "Tornado sirens were activated in Franklin County in response to a confirmed tornado sighting in Madison County near the Franklin County border early Wednesday morning.",
      "url": "https://www.dispatch.com/picture-gallery/news/2024/02/28/tornado-confirmed-in-madison-county-as-severe-weather-hits-central-ohio/72771202007/",
      "urlToImage": "https://www.dispatch.com/gcdn/authoring/authoring-images/2024/02/28/NCOD/72770793007-storm-damage-03.jpg?crop=7007,3943,x0,y0&width=3200&height=1801&format=pjpg&auto=webp",
      "publishedAt": "2024-02-28T13:29:28Z",
      "content": "Feb 28, 2024; Columbus, Ohio, USA; A hanger was destroyed and airplanes damaged at the Madison County Airport after a tornado touched down in the pre-dawn hours Feb. 28, 2024.\r\nDoral Chenoweth, Doral… [+2950 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Jack Baer",
      "title": "Cavaliers G Max Strus hits halfcourt buzzer-beater to shock Mavericks - Yahoo Sports",
      "description": "Strus made FIVE 3-pointers in the final four minutes.",
      "url": "https://sports.yahoo.com/cavaliers-max-strus-hits-halfcourt-buzzer-beater-to-shock-mavericks-024918230.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/4wmSkhH651C55QVrHs_9Mw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-02/aae28b10-d5e3-11ee-a7fd-64df587804da",
      "publishedAt": "2024-02-28T13:19:37Z",
      "content": "A tipped pass was only the start of the pandemonium between the Dallas Mavericks and Cleveland Cavaliers on Tuesday.\r\nThe fun began with the Mavericks down 118-117 and 8.3 seconds left. Mavericks for… [+1560 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Hanna Ziady",
      "title": "Apple cancels work on an electric car, reports say - CNN",
      "description": "Apple has abandoned decade-long efforts to build an electric car, according to multiple media reports, calling time on a project that some saw as potentially transformative for the auto industry.",
      "url": "https://www.cnn.com/2024/02/28/tech/apple-cancels-electric-car/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2021-12-24t000000z-500680478-rc22lr96u5gg-rtrmadp-3-netherlands-apple-antitrust.jpeg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-02-28T13:07:29Z",
      "content": "Apple has abandoned decade-long efforts to build an electric car, according to multiple media reports, calling time on a project that some saw as potentially transformative for the auto industry.\r\nMa… [+2839 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Push Square"
      },
      "author": "Liam Croft",
      "title": "Horizon Dev Reportedly Loses 10% of Staff After PlayStation Layoffs - Push Square",
      "description": "Around 40 employees lose their jobs",
      "url": "https://www.pushsquare.com/news/2024/02/horizon-dev-reportedly-loses-10percent-of-staff-after-playstation-layoffs",
      "urlToImage": "https://images.pushsquare.com/d3363cf1a80f9/1280x720.jpg",
      "publishedAt": "2024-02-28T13:00:00Z",
      "content": "Of the 900 PlayStation employees that lost their jobs during yesterday's layoffs, it's reported that roughly 40 of them or 10 per cent of the developer's workforce belonged to Horizon Forbidden West … [+1463 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Athletic"
      },
      "author": "Lukas Weese",
      "title": "Texas Tech coach tells fans to stop throwing debris on court vs. Texas - The Athletic",
      "description": "Texas thumped Texas Tech 81-69, handing the Red Raiders their third loss in the last four games.",
      "url": "https://theathletic.com/5304423/2024/02/28/texas-tech-grant-mccasland-fans-debris/",
      "urlToImage": "https://cdn.theathletic.com/app/uploads/2024/02/28000259/USATSI_22639381-scaled.jpg",
      "publishedAt": "2024-02-28T12:47:20Z",
      "content": "An ejection. Multiple technical fouls. Fans throwing debris on the court. Texas Tech coach Grant McCasland getting on the mic and telling fans to stop throwing objects.\r\nJust another chapter of the T… [+2204 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Anders Hagstrom",
      "title": "Pope Francis hospitalized briefly after dealing with flu symptoms - Fox News",
      "description": "Pope Francis was briefly hospitalized in Rome after combating flu symptoms for several days this weekend. The Vatican has not explained the visit.",
      "url": "https://www.foxnews.com/world/pope-francis-hospitalized-briefly-dealing-flu-symptoms",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/02/Pope-Francis-Hospitalized-Flu.jpg",
      "publishedAt": "2024-02-28T12:16:00Z",
      "content": "Join Fox News for access to this content\r\nPlus special access to select articles and other premium content with your account - free of charge.\r\nPlease enter a valid email address.\r\nBy entering your e… [+2371 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Anders Hagstrom",
      "title": "Hamas officials shut down Biden's ice cream diplomacy, rejects cease-fire deal - Fox News",
      "description": "Hamas officials threw cold water on President Biden's ice cream parlor prediction on Tuesday that a cease-fire agreement was just around the corner.",
      "url": "https://www.foxnews.com/politics/hamas-officials-shut-down-bidens-ice-cream-diplomacy-rejects-cease-fire-deal",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/02/Biden-Ice-Cream.jpg",
      "publishedAt": "2024-02-28T12:05:00Z",
      "content": "Join Fox News for access to this content\r\nPlus special access to select articles and other premium content with your account - free of charge.\r\nPlease enter a valid email address.\r\nBy entering your e… [+2534 chars]"
    },
    {
      "source": {
        "id": "cbs-news",
        "name": "CBS News"
      },
      "author": "Haley Ott",
      "title": "Alexey Navalny's team announces Moscow funeral arrangements, tells supporters to \"come early\" - CBS News",
      "description": "Russian opposition leader Alexey Navalny's funeral will be held in his Moscow neighborhood 2 weeks after he died in a remote Arctic prison.",
      "url": "https://www.cbsnews.com/news/alexey-navalny-moscow-russia-funeral/",
      "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2024/02/20/1dcebffb-7699-48fa-93f5-6db7abe8eb0f/thumbnail/1200x630/e0348eb716ada07a0d22a2aea3768608/cbsn-fusion-navalny-death-increasing-pressure-in-dc-to-pass-ukraine-aid-thumbnail-2696452-640x360.jpg?v=873773698949ef4145348bb09cabd43d",
      "publishedAt": "2024-02-28T11:52:11Z",
      "content": "The funeral service for Russia's most prominent opposition figure, Alexey Navalny, will be held on Friday at a church in the Moscow neighborhood where he lived, his press secretary said Wednesday.\r\n\"… [+4436 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Conversation Africa"
      },
      "author": "Rebecca Stephenson",
      "title": "The leap year is February 29, not December 32 due to a Roman calendar quirk – and fastidious medieval monks - The Conversation",
      "description": "Monks who failed to factor in the leap day placed spring equinox on the wrong day, which meant Ash Wednesday, Lent, Holy Week and Pentecost were also marked on the wrong day.",
      "url": "https://theconversation.com/the-leap-year-is-february-29-not-december-32-due-to-a-roman-calendar-quirk-and-fastidious-medieval-monks-224433",
      "urlToImage": "https://images.theconversation.com/files/577972/original/file-20240226-18-8vdn1.jpg?ixlib=rb-1.1.0&rect=5%2C5%2C609%2C315&q=45&auto=format&w=1356&h=668&fit=crop",
      "publishedAt": "2024-02-28T11:45:19Z",
      "content": "Have you ever wondered why the extra day of the leap year falls on February 29, an odd date in the middle of the year, and not at the end of the year on December 32? There is a simple answer, and a s… [+4652 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": "Hanna Flint",
      "title": "American Fiction: The Oscar nominee wading into the US culture wars - BBC.com",
      "description": "Out of all the 2024 Oscar favourites, this stinging race satire starring Jeffrey Wright has the most to say about contemporary America – and has won fans across the political divide.",
      "url": "https://www.bbc.com/culture/article/20240227-american-fiction-the-oscar-nominee-wading-into-the-us-culture-wars",
      "urlToImage": "https://ychef.files.bbci.co.uk/624x351/p0hfcdb9.jpg",
      "publishedAt": "2024-02-28T11:28:54Z",
      "content": "By Hanna FlintFeatures correspondent\r\nOut of all the 2024 Oscar favourites, this stinging race satire starring Jeffrey Wright has the most to say about contemporary America and has won fans across th… [+12746 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "WWMT-TV"
      },
      "author": "Donny Ede | News Channel 3",
      "title": "Tornado confirmed near Marshall early Wednesday - WWMT-TV",
      "description": "A tornado touched down near Marshall in the early morning hours of Wednesday.",
      "url": "https://wwmt.com/news/local/tornado-confirmed-near-marshall-battle-creek-wednesday-warning-kalamazoo-county",
      "urlToImage": "https://wwmt.com/resources/media/98268145-6d1c-4768-a241-9d1e92e6cb59-large16x9_tornado.png",
      "publishedAt": "2024-02-28T11:02:20Z",
      "content": "MARSHALL, Mich. A tornado touched down near Marshall in the early morning hours of Wednesday.\r\nAccording to 911 emergency management and trained spotters, a tornado was confirmed about 5 miles north-… [+428 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Reuters",
      "title": "Sam Bankman-Fried urges lenient sentence, citing FTX fund recovery - Reuters",
      "description": null,
      "url": "https://www.reuters.com/legal/sam-bankman-fried-says-63-78-months-should-guide-sentencing-ftx-fraud-2024-02-28/",
      "urlToImage": null,
      "publishedAt": "2024-02-28T10:24:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Holly Ellyatt",
      "title": "Russia relishes NATO disarray after hasty denials of plan to deploy ground troops to Ukraine - CNBC",
      "description": "Russian officials have commented widely on France's gaffe over ground troops, appearing to enjoy NATO's division and France's humiliation.",
      "url": "https://www.cnbc.com/2024/02/28/russia-relishes-macron-humiliation-after-nato-denial-on-ground-troops.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107345014-1702036364960-gettyimages-1794218348-RUS_Putin_Receives_Tajik_President_Emomali_Rakhmon_At_The_Grand_Kremlin_Palace.jpeg?v=1702036542&w=1920&h=1080",
      "publishedAt": "2024-02-28T10:00:03Z",
      "content": "Russian President Vladimir Putin and Defence Minister Sergei Shoigu attend a wreath-laying ceremony, which marks the anniversary of the beginning of the Great Patriotic War against Nazi Germany in 19… [+6976 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "John Fritze",
      "title": "Supreme Court hears challenge to Trump-era ban on bump stocks in a major gun control case - CNN",
      "description": "Bump stocks let shooters turn semi-automatic rifles into a weapon that can fire several hundred rounds per minute.",
      "url": "https://www.cnn.com/2024/02/28/politics/supreme-court-trump-era-ban-bump-stocks/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/240227162414-bump-stocks-file.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-02-28T10:00:00Z",
      "content": "For Michael Cargill, the thorny dispute over bump stocks is only partly about the controversial devices themselves.\r\nIts also about what Cargill views as government overreach.\r\nIts the principle of i… [+5615 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Sandee LaMotte",
      "title": "Any use of marijuana linked to higher risk of heart attack and stroke, study says - CNN",
      "description": "Any use of marijuana could raise the risk of heart attack and stroke, even in people who don’t use cigarettes or don’t have existing heart disease, a new study finds.",
      "url": "https://www.cnn.com/2024/02/28/health/marijuana-heart-attack-stroke-study-wellness/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1366397567-20240226234948248.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-02-28T10:00:00Z",
      "content": "Smoking, vaping or eating marijuana is linked to a significantly higher risk of heart attack and stroke, even if a person had no existing heart conditions and did not smoke or vape tobacco, a new stu… [+4275 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Reuters UK",
      "title": "British lawmakers fear for their safety after threats and abuse over Gaza - Reuters UK",
      "description": null,
      "url": "https://www.reuters.com/world/uk/after-threats-abuse-british-lawmakers-question-their-safety-over-gaza-2024-02-28/",
      "urlToImage": null,
      "publishedAt": "2024-02-28T09:14:00Z",
      "content": null
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "JIM VERTUNO",
      "title": "Out-of-control wildfires scorch Texas Panhandle and prompt shutdown of nuclear weapons facility - The Associated Press",
      "description": "A series of wildfires are sweeping across the Texas Panhandle, prompting evacuations, cutting off power to thousands, and forcing at least the temporary shutdown of a nuclear weapons facility. Strong winds, dry grass and unseasonably warm temperatures fed the…",
      "url": "https://apnews.com/article/texas-panhandle-fire-evacuations-2cad37f14581bac74a3691969aaaf956",
      "urlToImage": "https://dims.apnews.com/dims4/default/c62af0e/2147483647/strip/true/crop/2048x1152+0+107/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F5c%2F75%2Fe9fa4cf3068cb660c29a976cc51a%2Fbf0fb45e64d14f06984c989034871fa7",
      "publishedAt": "2024-02-28T06:33:45Z",
      "content": "A series of wildfires swept across the Texas Panhandle early Wednesday, prompting evacuations, cutting off power to thousands, and forcing at least the temporary shutdown of a nuclear weapons facilit… [+4815 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Suntimes.com"
      },
      "author": "Georgia Nicols",
      "title": "Horoscope for Wednesday, Feb. 28, 2024 - Chicago Sun-Times",
      "description": null,
      "url": "https://chicago.suntimes.com/horoscopes/2024/02/27/horoscopes-today-wednesday-feb-28-2024",
      "urlToImage": "https://cst.brightspotcdn.com/dims4/default/83cd2f0/2147483647/strip/true/crop/870x497+0+67/resize/1461x834!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F22483587%2FGeorgia_Nicols.jpg",
      "publishedAt": "2024-02-28T06:01:00Z",
      "content": "Caution: Yesterday's moon alert continues until 9:30 p.m. Chicago time today. After that, the moon moves from Libra into Scorpio.\r\nAries (March 21-April 19)\r\nIf you need to research anything or look … [+3848 chars]"
    }
  ]

  constructor() {
    super();
    console.log("i am constructor");
    this.state = {
      articles: this.articles,
      loading: false,
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewMonkey - Top Headlines</h2>
        <div className='row'>
          {this.state.articles.map((element) => {
            return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
      </div>
    )
  }
}
