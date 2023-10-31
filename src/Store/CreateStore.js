import { createContext, useState } from "react";

export const bucket = createContext();

function CreateStore(props){
    const [data, setData] = useState([
        {
            cat : "Bollywood",
            title : "Sushmita Sen visits Durga Puja pandal with daughter Alisah",
            id : 1,
            img : "https://static.toiimg.com/thumb/msid-104614120,imgsize-127940,width-400,resizemode-4/104614120.jpg",
            content : "Sushmita looked absolutely gorgeous as she donned a pink saree , her younger daughter alisah on saturday visited a durga puja pandal in mumbai. Sushmitha looked absolutely gorgeous as she draped a pink saree and tied her hair into a ponytail. Her younger daughter Alisah accompanied her to the location wearing a simple lehenga choli set."
        },
        {
            cat : "Bollywood",
            title : "Parineeti Chopra and Priyanka Chopra's mother Madhu Chopra burn the dance floor in an unseen video from sufi night .." ,
            id : 2,
            img : "https://static.toiimg.com/thumb/msid-104610567,imgsize-37266,width-400,resizemode-4/104610567.jpg",
            content : "Parineeti Chopra and Raghav Chadha got married in Udaipur on September 24 in a lavish wedding ceremony at the Leela Palace. The couple also enjoyed various activities as part of their pre-wedding rituals." 
        },
        {
            cat : "Bollywood" ,
            title : "Director R Balki shares insights on ad shoot with Amitabh Bachchan and Shah Rukh Khan!!",
            id : 3,
            img : "https://static.toiimg.com/thumb/msid-104614358,imgsize-29386,width-400,resizemode-4/104614358.jpg",
            content : "Amitabh Bachchan and Shah Rukh Khan recently joined forces to star in a commercial for a popular masala brand. Shah Rukh Khan was so eager to work with Amitabh Bachchan that he arrived on set before the legendary actor did."
        },
        {
            cat : "Bollywood" ,
            title : "Kangana Raunat expresses heartfelt gratitude to RajNath Singh and airforce officers ",
            id : 4,
            img : "https://static.toiimg.com/thumb/msid-104612503,imgsize-97354,width-400,resizemode-4/104612503.jpg",
            content : "Kangana Raunat on Saturday held a special screening of her upcoming film Tejas for Defence Minister Rajnath Singh and several Indian Air officers in Delhi. She took to Instagram to share a series of pictures from the screening and expressed her heartfelt gratitude to the dignitaries who were present there. "
        },
        {
            cat : "Bollywood",
            title : "Rajpal Yadav recalls his 3 months in jail : conducted acting workshops for prisoners and motivated",
            id : 5 ,
            img : "https://static.toiimg.com/thumb/msid-104613631,imgsize-43490,width-400,resizemode-4/104613631.jpg",
            content : "Rajpal Yadav recently opened up about serving three months in jail in 2018 for defaulting on a loan of Rs 5 crore, which he had taken in 2020 to make the film Ata Pata Laapata. Mentioning that he has never discussed this incident publicly before, the actor revealed that he had a positive impact on a senior jail official after being released from jail."
        },
        {
            cat : "Bollywood",
            img : "https://static.toiimg.com/thumb/msid-103166311,imgsize-30976,width-400,resizemode-4/103166311.jpg",
            id : 6,
            title : "Rajpal Yadav shares a fun experience from the Mathura schedule of 'Dream Girl-2'",
            content : "In an exclusive interview, Rajpal Yadav, who is well known for his adaptable acting,discusses his experience working on the movie 'Dream Gril 2'. He thanks the producers for giving him the chance to work with such brilliant co-stars and calls the film as the IPL of entertainment. "
        },
        {
            cat : "Bollywood",
            title : "Ananya Pandey reflects on failure of Liger,says one should take everything in their stride.",
            id : 7,
            img : "https://static.toiimg.com/photo/msid-101380069/101380069.jpg",
            content : "Ananya Panday recently opened up on the failure of her movie Liger, in whichshe starred opposite Vijay Devarakonda. She said that one should take care everything in their stride. She further addded that there is always something to learn from every experience and it actually makes you understand what went wrong and how one can be better."
        },    
        {
            cat : "Bollywood",
            title : "Ranveer Singh runs into Mahendra Singh Dhoni ; clicks priceless selfies",
            id : 8,
            img : "https://static.toiimg.com/thumb/msid-104183704,imgsize-38840,width-400,resizemode-4/104183704.jpg",
            content : "Ranveer Singh is an actor par excellence having delivered strong performances in films like Bajirao Mastani, Padmaavat, Rocky aur Rani ki Prem Kahani etc. The actor was recently spotted with Captain Cool Mahendra Singh Dhoni, during the latters visit to the city."
        },
        {
            cat : "Bollywood",
            title : "Thought somebody was playing a joke on me : Pallavi Josh on winning National Film Award ",
            id : 9,
            img : "https://static.tnn.in/thumb/msid-103159368,thumbsize-15112,width-1280,height-720,resizemode-75/103159368.jpg",
            content : "Actor and producer Pallavi Joshi is currently on cloud nine as she recently bagged the Best Supporting Actress award at the 69th National Film for her performance in the film 'The Kashmiri Files'.Talking exclusively Pallavi said 'For a minute I thought that this is probably a dream when I did this character of Radhika Menon.' I told vivek Agnihotri that this is probably one of my best performances but Iam not going to get an award for this.",
        },
        {
            cat : "Bollywood",
            title : "Popular content creator Saloni Gaur gets married to Rajat Sain, shares first pictures: ‘Our parents said yes’",
            id : 10,
            img : "https://www.hindustantimes.com/ht-img/img/2023/10/21/550x309/saloni_1697902545836_1697902590166.jpg",
            content : "Congratulations are in order for popular content creator and comedian Saloni Gaur who tied the knot with Rajat Sain. Take a look at their pictures below.Popular content creator and actor Saloni Gaur aka Salonayyy is married! The comedian took to Instagram to share beautiful pictures from her wedding to Rajat Sain",
        },
        {
            cat : "Bollywood",
            title : "Ananya Pandey reflects on failure of Liger,says one should take everything in their stride.",
            id : 11,
            img : "https://static.toiimg.com/photo/msid-101380069/101380069.jpg",
            content : "Ananya Panday recently opened up on the failure of her movie Liger, in whichshe starred opposite Vijay Devarakonda. She said that one should take care everything in their stride. She further addded that there is always something to learn from every experience and it actually makes you understand what went wrong and how one can be better."
        },    
        {
            cat : "Hollywood",
            title : "Did Taylor Swift's bodyguard really quit job to join Israel ?",
            id : 11,
            img : "https://static.toiimg.com/thumb/msid-104571708,imgsize-53644,width-400,resizemode-4/104571708.jpg",
            content : "Taylor Swift's security guard, Eran Swisa, reportedly quit his job in Israels fight against Hamas. He stated that he couldn't stand by while families were being killed and burned alive. However,there is a controversy surrounding the news,with fans claiming that Eran was not Swift's bodyguard but rather part of the security team at the stadium. "
        },
        {
            cat : "Hollywood",
            title : "Hollywood's actors strike nears 100th day the strike by film and TV actors, which is now approaching its 100th day, ",
            id : 12,
            img : "https://static.toiimg.com/thumb/msid-104568385,imgsize-9340,width-400,resizemode-4/104568385.jpg",
            content : "The strike by film and TV actors, which is now approaching its 100th day, shows no signs of ending soon. Talks between the screen actors Guild-American Federation of Television of Radio Artists and studios broke off on 11 October,with the studios claiming the actors demands were too expensive."
        },
        {
            cat : "Hollywood",
            title : "The Academy welcomes 'RRR' star Jr NTR to the Actors Branch; fans say 'Proud of you anna'",
            id : 13,
            img : "https://static.toiimg.com/thumb/msid-104541489,imgsize-33560,width-400,resizemode-4/104541489.jpg",
            content : "Telugu superstar Jr NTR has been invited to join the prestigious actors branch of the academy . This recognition comes after the success of his film 'RRR' at the international box office and at the Oscars. The Academy announced the new members, including Jr NTR, on their social media handles."
        },
        {
            cat : "Hollywood",
            title : "Napoleon: New trailer of Joaquin Phoenix movie released",
            id : 14,
            img : "https://static.toiimg.com/thumb/msid-104546531,imgsize-1202512,width-400,resizemode-4/104546531.jpg",
            content : "The makers of Joaquin Phoenix-starrer 'Napolean' unveiled a new trailer for the film. The film stars phoenix,48,as French emperor Napolean Bonaparte. Joaquin phoneix takes the crown.This acclaimed director Ridley Scott." 
        },       
        {
            cat : "Hollywood",
            title : "Rocky actor Burt Young passes away at 83 , Sylvester Stallone remembers his 'dear friend' in moving tribute",
            id : 15,
            img : "https://static.toiimg.com/thumb/msid-104540842,imgsize-33796,width-400,resizemode-4/104540842.jpg",
            content : "Veteran character actor Burt Young, best known and Oscar-nominated for his role as the brother-in-law and meat-cutting friend to Sylevester Stallone's prize-fighting protagonist in the 'Rocky' films has died at age 83, his manager said on Wednesday." 
        },
        {
            cat : "Holywood",
            title : "'The Dangers in My Heart' spinoff manga 'Twi-yaba...'",
            id : 16,
            img : "https://static.toiimg.com/thumb/msid-104535816,imgsize-60034,width-400,resizemode-4/104535816.jpg",
            content : "The official website for the TV anime adaptation of Norio sakurai's manga 'The Dangers in my heart' has announced that its spinoff manga will also be getting an anime adaptation. They've released a teaser promotional video for the second season of the main anime,set to premeire in January,2024."
        },
        {
            cat : "Hollywood",
            title : "Here's all you need to know about 'Dragon Ball Daima'",
            id : 17,
            img : "https://static.toiimg.com/thumb/msid-104477833,imgsize-44110,width-400,resizemode-4/104477833.jpg",
            content : "A new addition to the 'Dragon Ball' universe,called 'Dragon Ball Daima' was announced at New York Comic-Con. This anime spin-off will feature Son Goku and the z-fighters as children,embarking on a unique adventure to restore themselves to their adult forms. "
        },
        {
            cat : "Hollywood",
            title : "Teen Wolf Star Tyler Posey marries Phen in intimate wedding:",
            id : 18,
            img : "https://static.toiimg.com/thumb/msid-104459798,imgsize-104222,width-400,resizemode-4/104459798.jpg",
            content : "Teen Wolf star Tyler Posey tied the knot musican Phem in a private ceremony held in Pacific palisades, California. The couple exchanged vows in a meditation garden and celebrated with their closest friends and family. The bride wore a long-sleeved gown by Grace Loves Lace, while the groom opted for a beige suit tailored by British Custom Tailors."
        },
        {
            cat : "Hollywood",
            title : "Dark Knight actor Michael Caine announces retirement from acting",
            id : 19,
            img : "https://static.toiimg.com/thumb/msid-104513735,imgsize-16412,width-400,resizemode-4/104513735.jpg",
            content : "Veteran British actor Michael Caine, a hollywood icon with a decades-spanning career littered with awards and acclaim,revealed on Saturday that he has retired from acting at the age of 90. The Oscar winner bows out following another widely praised performnce in his final film, THE GREAT ESCAPER which was released on October 6."
        },
        {
            cat : "Hollywood",
            title : "Love is blind Season5 : Top 5 BOMBSHELLS from the reunion",
            id : 20,
            img : "https://static.toiimg.com/thumb/imgsize-23456,msid-104356475,width-200,resizemode-4/104356475.jpg",
            content : "The Love is Blind Season 5 reunion brought together the cast to discuss what happened after the cameras stopped rolling. Chris and Johnies breakup was a surprising revelation,with Chris admitting to cheating on Johnie. "
        },
        {
            cat : "Fitness",
            title : "The Role of Vitamin D in Osteoporosis: A Piece of the Puzzle",
            id : 21,
            img : "https://images.news18.com/ibnlive/uploads/2023/10/world-osteoporosis-day-2023-2023-10-495115446d2b980dc997fa53f906d199-3x2.jpg?impolicy=website&width=510&height=356",
            content : "Osteoporosis, a condition characterized by weak and brittle bones, is a significant health concern, especially among the aging population. While Vitamin D deficiency has been linked to osteoporosis, it is essential to recognize that it is not the sole cause of this condition. Osteoporosis is a multifactorial disorder influenced by various factors, of which Vitamin D is just one piece of the puzzle."
        },
        {
            cat : "Fitness",
            title : "October Heat: How Extreme Heat Harms Human Health",
            id : 22,
            img : "https://images.news18.com/ibnlive/uploads/2023/10/shutterstock_712846906-2023-10-0aa0804026d44dd2027a4adbb257677b-3x2.jpg?impolicy=website&width=510&height=356",
            content : "All humans are physiologically affected in different ways by prolonged exposure to heat, which frequently exacerbates pre-existing illnesses and causes early mortality and disability. Heatwaves often result in public health emergencies, have a significant negative influence on public health, and have a domino effect on other aspects of society. Some parts of the population are more prone to suffering from the stress from the heat than the rest. These include the young and old, pregnant women, manual laborers, and the underprivileged."
        },
        {
            cat : "Fitness",
            title : "Shilpa Shetty Shares Motivating Fitness Goals, This Time With Son Viaan;",
            id : 23,
            img : "https://images.news18.com/ibnlive/uploads/2023/10/untitled-project-2023-10-395f25114178b9d59137222063c04027-3x2.jpg?impolicy=website&width=510&height=356",
            content : "In her latest Instagram post, Shilpa Shetty shared an inspiring fitness challenge that she made look like childs play with her son, Viaan-Raj. This exercise is not only enjoyable but also incredibly beneficial for your overall health and fitness. Lets break down what Shilpas fitness challenge is all about.                      In Shilpas fitness challenge, she sits on a mat and simultaneously rotates each leg through the other. Flexibility is key in this workout, which also calls for control and coordination. Beyond improving flexibility, this exercise also works your core muscles, which are crucial for stability and balance."
        },
        {
            cat : "Fitness",
            title : "Mental Health Day 2023: Top 10 Self-Care Strategies for Improved Mental Health",
            id : 24,
            img : "https://images.news18.com/ibnlive/uploads/2023/10/world-mental-health-day-2023-types-2023-10-4d70a5bd29c191b8dad79449d155360b-3x2.jpg?impolicy=website&width=510&height=356",
            content : "On Mental Health Day 2023, it’s crucial to recognize the importance of self-care in nurturing our mental well-being. In today’s fast-paced world, self-care isn’t a luxury; it’s a necessity. Prioritizing self-care empowers us to better navigate life’s challenges, enhancing productivity, focus, and overall happiness. As we celebrate this day, we present the top 10 self-care strategies from experts, offering practical insights and actionable steps to improve our mental health. These strategies encompass gratitude, connection, mindfulness, work-life balance, and more, serving as a roadmap to a healthier, happier, and more resilient self. Embrace these practices to prioritize your mental health and foster a brighter future."
        },
        {
            cat : "Fitness",
            title : "Walking For Stress Management: How Many Steps You Should Walk In A Day?",
            id : 25,
            img : "https://images.news18.com/ibnlive/uploads/2023/07/untitled-design-2023-07-25t113020.273-16902648373x2.jpg?impolicy=website&width=510&height=356",
            content : "Often regarded as a mundane activity, walking carries profound evolutionary significance. Neuroscientist Shane O’Mara beautifully explores this intricate bond between humanity and the art of walking in his book “In Praise of Walking: A New Scientific Exploration.” He takes us on a journey through time, highlighting the discovery of ancient human footprints in South Africa dating back 117,000 years, underscoring how walking is a timeless and unique facet of our species. O’Mara also underscores the significance of walking on two legs and how, even in the age of advanced technology, walking remains a challenge for sophisticated robots."
        },
        {
            cat : "Fitness",
            title : "From Dark Chocolate To Blueberries: Benefits Of Antioxidants-Rich Foods",
            id : 26,
            img : "https://images.news18.com/ibnlive/uploads/2023/09/untitled-design-2023-09-13t124116.480-16945890833x2.jpg?impolicy=website&width=510&height=356",
            content : "Antioxidants are molecules that can help your body fight off harmful free radicals, which have been linked to benefit in various health conditions. Antioxidants are found in many plant-based foods rich in vitamin C, vitamin E, and beta-carotene, lycopene along with the minerals like selenium, zinc and manganese. Foods like dark chocolate, berries, green tea, green leafy vegetables, almonds, broccoli, and pink grapefruit are excellent sources of antioxidants and offer numerous health benefits."
        },
        {
            cat : "Fitness",
            title : "Importance Of Correct Seating Posture",
            id : 27,
            img : "https://res.cloudinary.com/comparis-cms/image/upload/v1686125303/health%20/overviewpages/fitness/fitness_xptixd.jpg",
            content : "Maintaining good posture helps keep your bones and joints in place. Consequently, there is less aberrant joint surface wear, less strain on the ligaments holding the spinal joints together, and your muscles are able to function more effectively. Additionally, maintaining proper posture can help avoid back and muscle pain, overuse injuries, and muscle strain."
        },
        {
            cat : "Fitness",
            title : "Here's How Oprah Winfrey's Daily Diet Plan Helped Her Lose 40 Pounds",
            id : 28,
            img : "https://images.news18.com/ibnlive/uploads/2023/09/untitled-design-2023-09-30t171432.547-2023-09-5e00a15b482d5071e6d710fb63d241e4-3x2.png?impolicy=website&width=510&height=356",
            content : "American talk show host – Oprah Winfrey has been candid about her weight loss journey in the past. She reached her heaviest weight at 237 pounds. However, she successfully shed over 40 pounds, after becoming an ambassador for WW (formerly Weight Watchers) in 2015. She consumes a daily total of 1,700 calories. Her diet consists of 20 per cent protein, 30 per cent healthy fat, and 50 per cent carbohydrates which includes whole grains, fruits, and vegetables."
        },
        {
            cat : "Fitness",
            title : "Working Long Hours? How Stress Affects Your Heart And Tips to Help",
            id : 29,
            img : "https://images.news18.com/ibnlive/uploads/2023/09/untitled-design-86-2023-09-3c5640db73e59d58976a3e5e2e65d988-3x2.jpg?impolicy=website&width=510&height=356",
            content : "For many of us, the time at work frequently plays a big role in adding to our stress. In today’s fast-paced society, being considered “hardworking” is often seen as an accolade and a necessity for achieving success. Yet, beneath the surface of ambition and commitment, the body’s most crucial organ, the heart, can be at risk. The pressures of a demanding work routine and a fast-paced lifestyle can potentially pose risks to heart health."
        },
        {
            cat : "Fitness",
            title : "Here’s why you should eat in the Sukhasana pose",
            id : 30,
            img : "https://images.indianexpress.com/2023/10/sukhasana.jpg?w=640",
            content : "Sitting on the floor and using your hands to enjoy a meal is a time-honored tradition in India, but have you ever wondered about the reasons behind it? Is there any wisdom in this practice. Recently, celebrity nutritionist Rujuta Diwekar shed light on a yoga posture that can enhance your eating experience. She recommends enjoying at least one meal while seated on the floor in Sukhasana, the cross-legged position.According to Diwekar, adopting the Sukhasana pose during meals can yield several benefits, including improved posture, enhanced focus on eating, and prevention of overeating."            
        },
        {
            cat : "Technology",
            title : "AI could help unearth a trove of lost classical texts",
            id : 31,
            img : "https://www.economist.com/cdn-cgi/image/width=834,quality=80,format=auto/content-assets/images/20231021_STP003.jpg",
            content : "The object known as P.Herc.Paris.3 resembles a dark grey lump of charcoal, about the size and shape of a banana. That explains its nickname: Banana Boy. It is in fact a papyrus scroll, found in the ruins of a villa in the Roman town of Herculaneum, in Campania. Along with hundreds of other scrolls in the villa’s library, it was carbonised when scorching gases engulfed the town during the same eruption of Mount Vesuvius, in 79ad, that also buried the nearby town of Pompeii."
        },
        {
            cat : "Technology",
            title : "Hundreds of chatbots could show us how to make social media less toxic",
            id : 32,
            img : "https://images.newscientist.com/wp-content/uploads/2023/10/18172749/SEI_176439365.jpg?width=900",
            content : "A newsfeed algorithm designed to counteract political polarisation could be effective, according to a test involving hundreds of AI-generated users By Chris Stokel-Walker,A social media algorithm designed to bridge the gap between people with different political views could reduce the toxicity of online discourse and promote better conversations. It appears to be effective – at least in tests on hundreds of AI-generated users."
        },
        {
            cat : "Technology",
            title : "Working with robots can make humans put in less effort",
            id : 33,
            img : "https://images.newscientist.com/wp-content/uploads/2023/10/18130628/SEI_176432998.jpg?width=900", 
            content : "People tend to cut corners and allow trusted colleagues to pick up the slack when working as a team, in a phenomenon known as social loafing. Now researchers have found that the same thing happens when humans work with robots. "
        },
        {
            cat : "Technology",
            title : "Let's use AI to rethink education, instead of panicking about cheating",
            id : 34,
            img : "https://images.newscientist.com/wp-content/uploads/2023/10/17104734/SEI_175845653.jpg?width=900",
            content : "If we build and use AI effectively, we can create an education system where students are assessed on the quality and depth of their knowledge, rather than the content of an exam, says Okezue Bell , ON A Monday afternoon in May, a final-year student, fresh off the Texas A&M University-Commerce graduation stage, received a shocking email. “The final grade for the course is due today at 5 p.m.,” it read. “I will be giving everyone in this course an… incomplete."
        },
        {
            cat : "Technology",
            title : "UK’s fastest supercomputer will be built in a car park in Bristol",
            id : 35,
            img : "https://images.newscientist.com/wp-content/uploads/2023/10/20121829/SEI_176709564.jpg?width=900",
            content : "Isambard-AI will contain about 5000 graphics processing units, making it 10 times as powerful as the UK’s current fastest computer, but it will have a humble home in a Bristol car park ,The fastest ever supercomputer in the UK would be one of the five quickest computers in the world if finished now, but the tremendously powerful machine will have a humble home in a Bristol car park. "
        },
        {
            cat : "Technology",
            title : "EU gives Meta and TikTok formal Hamas disinformation deadline",
            id : 36,
            img : "https://ichef.bbci.co.uk/news/976/cpsprodpb/15B73/production/_131474988_mediaitem131474987.jpg.webp",
            content : "TikTok and Meta have been formally told to provide the EU with information about the possible spread of disinformation on their platforms relating to the Israel-Gaza conflict. Previously they were given 24 hours to provide answers to the bloc's concerns. But that request did not carry legal force, whereas this latest demand does."
        },
        {
            cat : "Technology",
            title : "US-China chip war: Beijing unhappy at latest wave of US restrictions",
            id : 37,
            img : "https://ichef.bbci.co.uk/news/976/cpsprodpb/176ED/production/_130518959_gettyimages-1422453695.jpg.webp",
            content : "China has hit back at the Biden administration's decision to impose new restrictions on advanced chip exports. The foreign ministry said the curbs violate the principles of the market economy and fair competition           "
        },
        {
            cat : "Technology",
            title : "Tata Power Renewable Energy to set up 12.5 MW captive solar plant in Maharashtra",
            id : 38,
            img : "https://img.etimg.com/thumb/msid-104475015,width-300,height-225,imgsize-48222,,resizemode-75/bpcl-tied-up-with-the-solar-energy-corporation-of-india-under-the-ministry-of-new-and-renewable-energy-to-build-10-gw-of-renewable-capacity-by-2040-.jpg",
            content : "Tata Power Renewable Energy Ltd (TPREL) on Monday said it has signed an agreement with Endurance Technologies Ltd for setting up a 12.5 MW captive solar plant in Maharashtra. It has already signed a Power Delivery Agreement (PDA) with Endurance Technologies Ltd through a Special Purpose Vehicle (SPV) TP Green Nature Ltd in this regards, TPREL said in a statement The plant will be set up at Aachegaon in Maharashtra and will generate 27.5 Million Units (MUs) of electricity every year,This will help reduce Endurance Technologies' carbon footprints and mitigate approximately 9,125 Metric Tonnes (MT) of carbon emissions annually, it said."            
        },
        {
            cat : "Technology",
            title : "Solar power poised to become dominant global energy source by 2050: Study",
            id : 39,
            img : "https://img.etimg.com/thumb/msid-104576417,width-300,height-225,imgsize-1262136,,resizemode-75/solar.jpg",
            content : "Solar power is on the verge of becoming the world's primary energy source by 2050, even without an intensified push from global climate policies, according to a new study spearheaded by the University of Exeter and University College London This research is backed by the UK Government's Department for Energy Security and Net Zero, as well as the Children's Investment Fund Foundation (CIFF), under the umbrella of the Economics of Energy Innovation and System Transition (EEIST) project. "
                       
        },    
        {
            cat : "Technology",
            title : "Generative-AI",
            id : 40,
            img : "https://st.adda247.com/https://s3-ap-south-1.amazonaws.com/adda247jobs-wp-assets-adda247/articles/wp-content/uploads/2023/03/20174711/Generative-AI.jpg",
            content : "Generative AI, a cutting-edge technology, has revolutionized various industries by enabling machines to create content that resembles human-generated work. It encompasses a wide range of applications, from text generation to image synthesis and even music composition. After mastering generative AI, individuals can pursue exciting job roles in fields such as artificial intelligence research, data science, and creative industries. The ever-expanding applications of generative AI promise a bright future for those who master this technology, offering opportunities to shape how we interact and create content in the digital age. Some of the top job roles"
        },
        {
            cat : "Food",
            title : "How to make nutrient-rich Ragi Idli for breakfast",
            id : 41,
            img : "https://www.sharmispassions.com/wp-content/uploads/2018/02/RagiIdli2-475x500.jpg",
            content : "If your breakfast is rich in protein and fibre, then nothing can be healthier than this. While protein rich diet is beneficial in building muscles and keeping weight under control, fiber is effective in keeping blood glucose level under control and eliminating digestive problems. The combination of these two provides relief from all these problems and keeps you fit and fine, so if you are looking for a breakfast option that includes both of these and is easy to eat, then Ragi Idli. The option is the best. Know how to make it."
        },
        {
            cat : "Food",
            title : "'Fish curry-rice' must be served in beach shacks in Goa: Govt",
            id : 42,
            img : "https://www.recipetineats.com/wp-content/uploads/2020/10/Goan-Fish-Curry_6-SQ.jpg",
            content : "Are you a fish curry and rice lover who enjoys the combo by the beach in Goa? If yes, there is good news for you.As per the latest reports, the Government of Goa has made it mandatory for beach shacks to serve “fish curry-rice”, a staple of the coastal state."
        },
        {
            cat : "Food",
            title : "Rishi Sunak’s favourite Indian restaurant in London wins ‘Restaurant of The Year’ award",
            id : 43,
            img : "https://static.toiimg.com/thumb/msid-104017893,width-1070,height-580,imgsize-68064,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            content : "Indian cuisines, chefs, and restaurants are making headlines globally. The latest addition to this list is Chutney Mary, one of London’s most prominent Indian restaurants, which has recently won the AA Hospitality Awards’ Restaurant of the Year award.As per reports, the acclaimed restaurant is British Prime Minister Rishi Sunak's favourite too. The 33-year-old fine-dine Indian restaurant was established in 1990 by sisters Camellia and Namita Punjabi and her husband Ranjit in Chelsea, London. Later, it was relocated to St. James’ Street, near London’s Ritz Hotel, in 2015."
        },
        {
            cat : "Food",
            title : "This Asian soup has been voted as the best chicken soup in the world",
            id : 44,
            img : "https://static.toiimg.com/thumb/msid-103576693,width-1070,height-580,imgsize-127276,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            content : "Chicken soup, often referred to as Jewish penicillin, has earned its reputation as a soothing and nourishing elixir over generations. Beyond its delightful taste, this time-honoured dish is known as the best comfort food and boasts numerous health benefits, which makes it a cherished dish worldwide. Its warm, steamy broth can help clear congested sinuses and provide much-needed hydration, while the chicken itself offers a lean source of protein, aiding in muscle recovery and immune support. The vegetables commonly found in Chicken Soup, like carrots, celery, and onions, provide essential vitamins and minerals that boost overall health."            
        },
        {
            cat : "Food",
            title : "Are you a fan of mushrooms? Here's a festival especially for you",
            id : 45,
            img : "https://cdn-prod.medicalnewstoday.com/content/images/articles/278/278858/mushrooms-in-a-bowel-on-a-dark-table.jpg",
            content : "If scenic valleys and mushrooms are what delight your senses, the enchanting allure of the Genekha district at the annual Matsutake Mushroom Festival is the place to be at. This festival takes place from August 15th-16th . Nestled in the captivating valley of Genekha, just an hour's drive from Thimphu, this festival is a celebration of the region's vibrant culture, traditions, and the diverse local communities that call it home."
        },
        {
            cat : "Food",
            title : "Editor's Pick: Italian Maestro, Luca Cinalli elevates the cocktail scene at Pling, Pullman",
            id : 46,
            img : "https://static.toiimg.com/thumb/104264224.cms?width=1200&height=900",
            content : "Pullman New Delhi Aerocity recently hosted an extraordinary bar takeover event featuring Luca Cinalli, an Italian Master Trainer & Bar Consultant."
        },
        {
            cat : "Food",
            title : "Celebrating flavours of Tangra in Hyderabad",
            id : 47,
            img : "https://th-i.thgim.com/public/incoming/ab29c9/article67141485.ece/alternates/FREE_1200/dimsum.jpeg",
            content : "Weather and food go hand in hand. As Hyderabadis enjoy the monsoon season, Chef Ye Chung Yuan aka Robert who hails from Tangra in Kolkata was dishing out food that complement the weather. Think juicy baos, Talumeinsoup, chilli chicken, mushroom hot pot, street-style hakka noodles, lamb chops and more. All this over the last weekend at Okra in Marriott Hyderabad at the Flavours of Tangra food showcase."
        },
        {
            cat : "Food",
            title : "Mutton soup is the signature dish of RL Cafe, a Kudumabashree outlet in Thiruvananthapuram",
            id : 48,
            img : "https://th-i.thgim.com/public/incoming/ovvdiu/article67044800.ece/alternates/LANDSCAPE_1200/Mutton%20soup%20from%20RL%20Cafe%20in%20Thiruvananthapuram.JPG",
            content : "Although it is drizzling, a little curbside Kudumbasree outlet, almost opposite Akashwani on the DPI-Poojapura Road in Thiruvananthapuram, is surrounded by customers. The aroma of ginger, green chilli and masala and the sting of chopped onion fill the air even as a stocky man steadily keeps adding to the heap of chopped onion on a makeshift table.Finally, he lifts his head up and smiles. Quite a talkative man, K Sreekumaran leaves the onion to talk to me about the food and what is special about the outlet. I ask him if I could speak to the owner. Pointing to a man doling out hot mutton curry into a steel dabba, he says I should speak to him. “His name is Balachandran,” he adds."
        },
        {
            cat : "Food",
            title : "Find Morocco in Chennai at Ignna by Midnight Sun",
            id : 49,
            img : "https://th-i.thgim.com/public/life-and-style/food/qnxyn8/article67118389.ece/alternates/LANDSCAPE_1200/Seafood%20Tagine.jpg",
            content : "Like every metro across the globe, Chennai too has been seeing a rapid increase in the number of restaurants serving international cuisine. But very rarely does it feel like we have been transported to that country for a meal. "            
        },
        {
            cat : "Food",
            title : "A History of Pizza",
            id : 50,
            img : "https://www.historytoday.com/sites/default/files/articles/pizza.jpg",
            content : "Pizza is the worlds favourite fast food. We eat it everywhere at home, in restaurants, on street corners. Some three billion pizzas are sold each year in the United States alone, an average of 46 slices per person. But the story of how the humble pizza came to enjoy such global dominance reveals much about the history of migration, economics and technological change People have been eating pizza, in one form or another, for centuries. As far back as antiquity, pieces of flatbread, topped with savouries, served as a simple and tasty meal for those who could not afford plates, or who were on the go. "
        },
    ])

return(
<bucket.Provider value = {[data,setData]}>
    {props.children}
</bucket.Provider>
)
}
export default CreateStore;
