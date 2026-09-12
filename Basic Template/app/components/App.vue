<template>
  <Frame>
    <Page class="background">

      <ActionBar title="Home" style="background-color: #DAD2BB;">
        <!-- <ActionItem ios.position="left" 
                    @tap="goHome" text="Home" /> -->

        <ActionItem
            	ios.position="right" text="Settings"
                @tap="gotoSettings"  />

      </ActionBar>

<!-- Tab Views -->
      <TabView style="tabBackgroundColor: #DAD2BB; tabTextFontSize: 16; tabTextColor: #000000;">

<!-- Home tab -->
        <TabViewItem title="Home" >
          <GridLayout>
            <StackLayout>
              <Image :src="octopusChar" class="charImg" />
              <Label class="helloMsg">
                Ahoy Captain!
              </Label>
              <Label id="stepText" class="helloMsg" text="Steps: Yet to be Updated"/>
              <Button  @tap="stepsAdded" text="Update Steps" class="buttons"/>

              <MapView  class="mapImg" height="40%" 
                :lat="userLat"
                :lng="userLong"
                zoom="18"
            />
            </StackLayout>     
            
          </GridLayout>
        </TabViewItem>

<!-- Map Tab -->
        <TabViewItem title="Map">
          <GridLayout>
            <StackLayout>
              <MapView
                :lat="userLat"
                :lng="userLong"
                zoom="18"

            />
            </StackLayout>     
          </GridLayout>
        </TabViewItem>
        
<!-- Captains log tab -->
        <TabViewItem title="Captains Log">
          <GridLayout>
            <ScrollView>
              <StackLayout>
                
<!-- New items -->
                <StackLayout orientation="horizontal" height="150" style="margin-top: 10;">
                  <Image :src="maritime" class="treasureImageLeft" @tap="maritimeMuseum" stretch="aspectFill"/>
                  <Image :src="rackham" class="treasureImageRight" @tap="jackRackham" stretch="aspectFill"/>                
                </StackLayout>

                <StackLayout orientation="horizontal">
                  <Label class="treasureText" text="Maritime Museum"/>
                  <Label class="treasureText" text="Jack Rackham"/>                
                </StackLayout>
                
<!-- New items -->
                <StackLayout orientation="horizontal" height="150" style="margin-top: 10;">
                  <Image :src="cuttysark" class="treasureImageLeft" @tap="cuttySark" stretch="aspectFill"/>
                  <Image :src="captainkidd" class="treasureImageRight" @tap="captainKidd" stretch="aspectFill"/>                
                </StackLayout>

                <StackLayout orientation="horizontal">
                  <Label class="treasureText" text="Cutty Sark"/>
                  <Label class="treasureText" text="Captain Kidd"/>                
                </StackLayout>

<!-- New items -->
                <StackLayout orientation="horizontal" height="150" style="margin-top: 10;">
                  <Image :src="queenannesrev" class="treasureImageLeft" @tap="queenAnnesRevenge" stretch="aspectFill"/>
                  <Image :src="williammorris" class="treasureImageRight" @tap="williamMorris" stretch="aspectFill"/>                
                </StackLayout>

                <StackLayout orientation="horizontal">
                  <Label class="treasureText" text="Queen Annes Revenge"/>
                  <Label class="treasureText" text="William Maurice"/>                
                </StackLayout>

<!-- New items -->
                <StackLayout orientation="horizontal" height="150" style="margin-top: 10;">
                  <Image :src="blackbeard" class="treasureImageLeft" @tap="blackBeard" stretch="aspectFill"/>
                  <Image :src="maryreed" class="treasureImageRight" @tap="maryReed" stretch="aspectFill"/>                
                </StackLayout>

                <StackLayout orientation="horizontal">
                  <Label class="treasureText" text="Edward Thatch (Blackbeard)"/>
                  <Label class="treasureText" text="Mary/Mark Reed"/>                
                </StackLayout>

<!-- New items -->
                <StackLayout orientation="horizontal" height="150" style="margin-top: 10;">
                  <Image :src="annebonny" class="treasureImageLeft" @tap="anneBonny" stretch="aspectFill"/>

                </StackLayout>

                <StackLayout orientation="horizontal">
                  <Label class="treasureText" text="Anne Bonny"/>
                </StackLayout>

              </StackLayout>
            </ScrollView>
          </GridLayout>
        </TabViewItem>

<!-- Crew/Friends tab -->
        <TabViewItem title="Crew">
          <GridLayout>
            <ScrollView>
            <StackLayout>
              
<!-- New items -->
              <StackLayout orientation="horizontal" height="130" style="margin-top: 10;">
                <Image :src="octopusChar" class="friendPhoto" />

                <Label class="friendInfo" textWrap="true" text="
    Treasure Found: 5 &#xa;
    Days a Pirate: 63 &#xa;
    Distance Travelled: 7.2km
                "/>
              </StackLayout>
              <Label class="headderTxt" style="margin-top: 3; margin-bottom: 20;">Captain</Label>

<!-- New items -->
              <StackLayout orientation="horizontal" height="130" style="margin-top: 10;">
                <Image :src="myChar" class="friendPhoto" style="background-color: #88D791; border-color: #5A9C62;"/>

                <Label class="friendInfo" textWrap="true" text="
    Treasure Found: 7 &#xa;
    Days a Pirate: 16 &#xa;
    Distance Travelled: 5km
                "/>
              </StackLayout>
              <Label class="headderTxt" style="margin-top: 3; margin-bottom: 20;">Crew member 1</Label>

<!-- New items -->
              <StackLayout orientation="horizontal" height="130" style="margin-top: 10;">
                <Image :src="fishChar" class="friendPhoto" style="background-color: #FFE656; border-color: #BEAA3A;"/>

                <Label class="friendInfo" textWrap="true" text="
    Treasure Found: 16 &#xa;
    Days a Pirate: 82 &#xa;
    Distance Travelled: 12km
                "/>
              </StackLayout>
              <Label class="headderTxt" style="margin-top: 3; margin-bottom: 20;">Crew member 2</Label>

<!-- New items -->
              <StackLayout orientation="horizontal" height="130" style="margin-top: 10;">
                <Image :src="blondeChar" class="friendPhoto" style="background-color: #EE7F81; border-color: #C94F52;"/>

                <Label class="friendInfo" textWrap="true" text="
    Treasure Found: 4 &#xa;
    Days a Pirate: 25 &#xa;
    Distance Travelled: 9km
                "/>
              </StackLayout>
              <Label class="headderTxt" style="margin-top: 3; margin-bottom: 20;">Crew member 3</Label>

<!-- New items -->
              <StackLayout orientation="horizontal" height="130" style="margin-top: 10;">
                <Image :src="parrotChar" class="friendPhoto" style="background-color: #CE7FEE; border-color: #A74FC9;"/>

                <Label class="friendInfo" textWrap="true" text="
    Treasure Found: 9 &#xa;
    Days a Pirate: 18 &#xa;
    Distance Travelled: 12km
                "/>
              </StackLayout>
              <Label class="headderTxt" style="margin-top: 3; margin-bottom: 20;">Crew member 4</Label>

<!-- New items -->
              <StackLayout orientation="horizontal" height="130" style="margin-top: 10;">
                <Image :src="purpleChar" class="friendPhoto" style="background-color: #EE7FD6; border-color: #C94F98;"/>

                <Label class="friendInfo" textWrap="true" text="
    Treasure Found: 7 &#xa;
    Days a Pirate: 41 &#xa;
    Distance Travelled: 2.4km
                "/>

              </StackLayout>
              <Label class="headderTxt" style="margin-top: 3; margin-bottom: 20;">Crew member 5</Label>

            </StackLayout>
            </ScrollView>
          </GridLayout>
        </TabViewItem>
      </TabView>
    </Page>
  </Frame>
</template>

<script setup>
  import { $navigateTo, onMounted, ref } from "nativescript-vue";
  import { knownFolders, File, ImageSource, path, Http, TextField, GridLayout, StackLayout } from "@nativescript/core";
  
  // require the plugin
  var Pedometer = require("nativescript-pedometer").Pedometer;
  
  // instantiate the plugin
  var pedometer = new Pedometer();
  
  pedometer.isStepCountingAvailable(function(avail) {
    alert(avail ? "Yes" : "No");
  });
  let noSteps = 'Steps: 0';

    pedometer.startUpdates({
      fromDate: new Date(), 
      onUpdate: result => {
          noSteps = 'Steps: ' + (result.steps);
        }
      }).then(() => {
        console.log("Pedometer updates started.");
        
      }, err => {
        console.log("Error: " + err);
    });
    
  const view = require("tns-core-modules/ui/core/view");
  function stepsAdded(args) {
      let button = args.object;
      let parent = button.parent;
      if (parent) {
          let lbl = view.getViewById(parent, "stepText"); 
          if (lbl) {
              lbl.text = noSteps;
          }
      }
  }

  import * as geolocation from '@nativescript/geolocation'
  import { CoreTypes } from '@nativescript/core' 

  // set as ref(0) because it kept bugging out and changing the location to stone henge?
  let userLat = ref(0);
  let userLong = ref(0);

  function getLocation(){
    geolocation.enableLocationRequest().then(() => {
    geolocation
      .getCurrentLocation({
        // make it very accurate
        desiredAccuracy: CoreTypes.Accuracy.high,
        // hoe long the data streoed
        maximumAge: 5000,
        // how long beofre get it ahgain
        timeout: 20000,
      })
      .then((currentLocation) => {
        // get the lat and long of the user based on this
          userLong.value = (currentLocation.longitude);
          userLat.value = (currentLocation.latitude);
      })
  })
  }

    getLocation();


  // import * as mapsModule from "@nativescript/google-maps";

//   function onReady(args) {
//     // Gets the map
//     const map = args.object;
//     // makes a marker 
//     const marker = new mapsModule.Marker();
//     console.log("marker made");

//     marker.position = mapsModule.Position.positionFromLatLng(51.4742657, -0.0804932);
//     marker.title = "CCI";
//     marker.color = "green";
//     map.addMarker(marker);
// }



  const documents = knownFolders.documents();

  const octopusChar = ref(null);
  const myChar = ref(null);
  const fishChar = ref(null);
  const blondeChar = ref(null);
  const parrotChar = ref(null);
  const purpleChar = ref(null);

  const mapsmall = ref(null);
  const mapbig = ref(null);

  const maritime = ref(null);
  const rackham = ref(null);
  const cuttysark = ref(null);
  const captainkidd = ref(null);
  const queenannesrev = ref(null);
  const williammorris = ref(null);
  const blackbeard = ref(null);
  const maryreed = ref(null);
  const annebonny = ref(null);

  // stored the image parts in a list so i can loop thruogh it
  let imageNames = [
    [octopusChar, "octopuscharacter.png", "https://i.imgur.com/yXkE3Gs.png"], 
    [myChar, "mycharacter.png", "https://i.imgur.com/nBo6KR0.png"],
    [fishChar, "fishcharacter.png", "https://i.imgur.com/8dvwaqY.png"],
    [blondeChar, "blondecharacter.png", "https://i.imgur.com/ZACuoH4.png"],
    [parrotChar, "parrotcharacter.png", "https://i.imgur.com/36gDu26.png"], 
    [purpleChar, "purplecharacter.png", "https://i.imgur.com/i34oTm6.png"],
    [mapsmall,"map-small.png", "https://i.imgur.com/084sv4c.png"],
    [mapbig, "map-big.png", "https://i.imgur.com/sQ8lxE6.png"],
    [maritime, "maritime.png", "https://media.timeout.com/images/103267808/750/422/image.jpg",
     "The National Maritime Museum (NMM) is a maritime museum in Greenwich, London. It is part of Royal Museums Greenwich, a network of museums in the Maritime Greenwich World Heritage Site. Like other publicly funded national museums in the United Kingdom, it has no general admission charge; there are admission charges for most side-gallery temporary exhibitions, usually supplemented by many loaned works from other museums."],
    [rackham, "rackham.png", "https://upload.wikimedia.org/wikipedia/commons/b/b3/Rackham%2C_Jack.jpg",
     "John Rackham (hanged 18 November 1720), perhaps known as Calico Jack, was a pirate captain operating in the Bahamas and Jamaica during the early 18th century. Rackham was active in 1720, towards the end of the \"Golden Age of Piracy\". He is most remembered for having two female pirate crew members: Mary Read and Anne Bonny. Rackham's life prior to piracy is unknown. He first appears in records in August 1720 by stealing a British sloop from Nassau harbor. After a short run, Rackham was captured by Jonathan Barnet, a former English privateer. Rackham was put on trial by Sir Nicholas Lawes, Governor of Jamaica, and hanged on the 18th of November that year in Port Royal, Jamaica."],
    [cuttysark, "cuttysark.png", "https://saltertonartsreview.com/wp-content/uploads/2025/03/IMG-20240902-WA0067.jpg",
     "Cutty Sark is a British clipper ship. Built on the River Leven, Dumbarton, Scotland in 1869 for the Jock Willis Shipping Line, she was one of the last tea clippers to be built and one of the fastest, at the end of a long period of design development for this type of vessel, which ended as steamships took over their routes. She was named after the short shirt of the fictional witch in Robert Burns' poem Tam o' Shanter, first published in 1791. \n After the big improvement in the fuel efficiency of steamships in 1866, the opening of the Suez Canal in 1869 gave them a shorter route to China, so Cutty Sark spent only a few years on the tea trade before turning to the trade in wool from Australia, where she held the record time to Britain for ten years. Continuing improvements in steam technology early in the 1880s meant that steamships also came to dominate the longer sailing route to Australia, and the ship was sold to the Portuguese company Ferreira and Co. in 1895 and renamed Ferreira. She continued as a cargo ship until purchased in 1922 by retired sea captain Wilfred Dowman, who used her as a training ship operating from Falmouth, Cornwall. After his death, Cutty Sark was transferred to the Thames Nautical Training College, Greenhithe, in 1938 where she became an auxiliary cadet training ship alongside HMS Worcester. By 1954, she had ceased to be useful as a cadet ship and was transferred to permanent dry dock at Greenwich, London, for public display. \n Cutty Sark is listed by National Historic Ships as part of the National Historic Fleet (the nautical equivalent of a Grade 1 Listed Building). She is one of only three remaining intact composite construction (wooden hull on an iron frame) ships from the nineteenth century, the others being the clipper City of Adelaide, now in Port Adelaide, South Australia, and the warship HMS Gannet in Chatham. The beached skeleton of Ambassador, of 1869 lying near Punta Arenas, Chile is the only other significant remnant of this construction method. \n The ship has been damaged by fire twice in recent years, first on 21 May 2007 while undergoing conservation. She was restored and was reopened to the public on 25 April 2012. Funders for the Cutty Sark conservation project include: the Heritage Lottery Fund, the House of Commons Digital, Culture, Media and Sport Committee, Sammy Ofer Foundation, Greenwich Council, Greater London Authority, The Stavros Niarchos Foundation, Berry Brothers & Rudd, Michael Edwards and Alisher Usmanov. \n On 19 October 2014 she was damaged in a smaller fire. \n Cutty Sark whisky derives its name from the ship. An image of the clipper appears on the label, and the maker formerly sponsored the Cutty Sark Tall Ships Race. The ship also inspired the name of the Saunders Roe Cutty Sark flying boat. "],
    [captainkidd, "captainkidd.png", "https://upload.wikimedia.org/wikipedia/commons/5/50/William_Kidd.jpg",
     "William Kidd (c. 1645 – 23 May 1701), also known as Captain William Kidd or simply Captain Kidd, was a Scottish-American privateer. Conflicting accounts exist regarding his early life, but he was likely born in Dundee and later settled in New York City. By 1690, Kidd had become a highly successful privateer, commissioned to protect English interests in the Thirteen Colonies in North America and the West Indies.\nIn 1695, Kidd received a royal commission from the Earl of Bellomont, the governor of New York, Massachusetts Bay and New Hampshire, to hunt down pirates and enemy French ships in the Indian Ocean. He received a letter of marque and set sail on a new ship, Adventure Galley, the following year. On his voyage he failed to find many targets, lost much of his crew and faced threats of mutiny. In 1698, Kidd captured his greatest prize, the 400-ton Quedagh Merchant, a ship hired by Armenian merchants and captained by an Englishman. The political climate in England had turned against him, however, and he was denounced as a pirate. Bellomont engineered Kidd's arrest upon his return to Boston and sent him to stand trial in London. He was found guilty and hanged in 1701.\nKidd was romanticized after his death and his exploits became a popular subject of pirate-themed works of fiction. The belief that he had left buried treasure contributed significantly to his legend, which inspired numerous treasure hunts in the following centuries."],
    [queenannesrev, "queenannesrev.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Queen_Anne%27s_Revenge_model_NCMH.jpg/500px-Queen_Anne%27s_Revenge_model_NCMH.jpg",
      "Queen Anne's Revenge was an early-18th-century ship, most famously used as a flagship by Edward Teach, better known by his nickname Blackbeard. The date and place of the ship's construction are uncertain, and there is no record of its actions prior to 1710 when it was operating as a French privateer as La Concorde. Surviving features of the ship's construction strongly suggest it was built by French shipwrights, based on differences in fastening patterns in the late 17th and early 18th centuries. After several years of French service, both as a naval frigate and as a merchant vessel – much of that time as a slave ship – she was captured by Blackbeard in 1717. Blackbeard used the ship for less than a year, but captured numerous prizes using her as his flagship.\n In May 1718, Blackbeard ran the ship aground at Topsail Inlet, now known as Beaufort Inlet, North Carolina, United States, in present-day Carteret County. After the grounding, her crew and supplies were transferred to smaller ships. In 1996, Intersal Inc., a private firm, discovered the remains of a vessel that was later determined to be Queen Anne's Revenge, which was added to the U.S. National Register of Historic Places. The shipwreck was discovered off Beaufort Inlet, North Carolina."],
    [williammorris, "williammorris.png", "https://theeverlearner.com/uploads/blog/History%20Blog/ridleylatimer-min.jpg", 
    "William Maurice is often cited as the first person in England to be hanged, drawn, and quartered for piracy, marking a significant moment in the legal history of maritime crime. He was convicted in 1241 under the reign of King Henry III, at a time when piracy was increasingly seen as a serious threat to royal authority and trade. Though little is known about his personal life or the specifics of his crimes, Maurice’s execution set a harsh precedent for how the English Crown would treat pirates—as traitors to the state rather than just common criminals. His case symbolizes the early efforts of the monarchy to assert control over the seas and punish those who defied that order."],
    [blackbeard, "blackbeard.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Edward_Teach_Commonly_Call%27d_Black_Beard_%28bw%29_%28cropped%29.jpg/250px-Edward_Teach_Commonly_Call%27d_Black_Beard_%28bw%29_%28cropped%29.jpg",
     "Edward Teach (or Thatch; c. 1680 – 22 November 1718), better known as Blackbeard, was an English pirate who operated around the West Indies and the eastern coast of Britain's North American colonies. Little is known about his early life, but he may have been a sailor on privateer ships during Queen Anne's War before he settled on the Bahamian island of New Providence, a base for Captain Benjamin Hornigold, whose crew Teach joined around 1716. Hornigold placed him in command of a sloop that he had captured, and the two engaged in numerous acts of piracy. Their numbers were boosted by the addition to their fleet of two more ships, one of which was commanded by Stede Bonnet, but Hornigold retired from piracy toward the end of 1717, taking two vessels with him.\nTeach captured a French slave ship known as La Concorde, renamed her Queen Anne's Revenge, equipped her with 40 guns, and crewed her with over 300 men. He became a renowned pirate. His nickname derived from his thick black beard and fearsome appearance. He was reported to have tied lit fuses (slow matches) under his hat to frighten his enemies. He formed an alliance of pirates and blockaded the port of Charles Town, South Carolina, ransoming the port's inhabitants. He then ran Queen Anne's Revenge aground on a sandbar near Beaufort, North Carolina. He parted company with Stede Bonnet and settled in Bath, North Carolina, also known as Bath Town, where he accepted a royal pardon. However, he was soon back at sea, where he attracted the attention of Alexander Spotswood, the governor of Virginia. Spotswood arranged for a party of soldiers and sailors to capture him. On 22 November 1718, following a ferocious battle, Teach and several of his crew were killed by a small force of sailors led by Lieutenant Robert Maynard.\nTeach was a shrewd and calculating leader who spurned the use of violence, relying instead on his fearsome image to elicit the response that he desired from those whom he robbed. He was romanticised after his death and became the inspiration for an archetypal pirate in works of fiction across many genres."],
    [maryreed, "maryreed.png", "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqXiLOUaILmFRfoDzIURXGhCWQfGaZ-KA5I_lAbYp0tJE9GRcrRil7La25ZOirgkhSSB4kgsPcZpdkU22SvgwTUo_UBo08ekuBTvMJakhaeg7bNV0TtdfZavodDe4mdgiSlnEx7Rvo7ON6/s1600/MaryRead.png",
      "Mary Read (died April 1721), was a pirate who served under John Rackham. She and Anne Bonny were among the few female pirates during the \"Golden Age of Piracy\".\nMuch of Read's background is unknown. The first biography of Read comes from Captain Charles Johnson's 1724 book, A General History of the Pyrates. According to Johnson, Read was born in England, dressed as a boy much of her childhood, eventually joined the military and later moved to the West Indies. Though Johnson's version of events has become generally accepted, there is little evidence to support them.\nAt an unknown date, Read traveled to the Bahamas where she became acquainted with the pirate John Rackham. Around August 1720, she joined Rackham's crew, alongside Anne Bonny. Together they stole the sloop William from Nassau harbor. Read's time as a pirate was short lived, as she, Bonny, and Rackham were arrested in October 1720. Rackham was executed in November, but Read and Bonny both claimed to be pregnant during their trials and received a stay of execution. Read died while imprisoned in April 1721, while Bonny's fate is unknown."],
    [annebonny, "annebonny.png", "https://pirates.hegewisch.net/anne_bonny_color_72.jpg",
      "Anne Bonny (disappeared after 28 November 1720) was a pirate who served under John Rackham. Amongst the few recorded female pirates in the Golden Age of Piracy, she has become one of the most recognized pirates of the era, as well as in the history of piracy in general.\nMuch of Bonny's background is unknown. The first biography of Bonny comes from Captain Charles Johnson's 1724 book A General History of the Pyrates. According to Johnson, Bonny was born in Ireland the illegitimate daughter of an attorney and his servant. Bonny and her father would later move to Carolina, where she married a sailor. Though Johnson's version of events has become generally accepted, there is little evidence to support them.\nAt an unknown date, Bonny travelled to the Bahamas where she became acquainted with the pirate John Rackham. Bonny would join Rackham's crew, alongside another female pirate, Mary Read, and helped steal the sloop William in August 1720. Rackham and his crew would carry out a number of attacks on merchant ships in the West Indies until they were captured following a brief naval engagement in October 1720. Rackham, along with all the male crew members, were tried and sentenced to death, but Bonny and Read had their executions stayed due to both of them claiming to be pregnant. Read died in jail around mid April 1721, but Bonny's fate is unknown. "
    ],
  ]

  
  // Looped through the array to store each iamge
  for (let i = 0; i < imageNames.length; i++) {
    let character = imageNames[i][0];
    let filename = imageNames[i][1];
    let url = imageNames[i][2];
    let imagepath = path.join(documents.path, filename);
    if(!File.exists(imagepath)){
      Http.getImage(url)
        .then((image) => {
          // Save downloaded image to local folder
          image.saveToFile(imagepath, "png");
          character.value = imagepath;
        });
    }else{
      character.value = imagepath;
    }
  }
  

  const imageProps = {};

  for (let item of imageNames) {
    const [imagefilepaths, filename, url, desc] = item;

    // Generate a cleaner key
    const key = filename.replace(/\.png$/, '').replace(/-/, '');

    // Build the base object
    imageProps[key] = {
      image: imagefilepaths.value,
      filename,
      url
    };

    // Add the extra description if it exists
    if (desc) {
      imageProps[key].description = desc;
    }
  }



  import settingsPage from "./settings.vue";
  import maritimeMuseumPage from "./maritimeMuseum.vue";
  import jackRackhamPage from "./jackRackham.vue";
  import cuttySarkPage from "./cuttySark.vue";
  import captainKiddPage from "./captainKidd.vue";
  import queenAnnesRevengePage from "./queenAnne.vue";
  import williamMorrisPage from "./williamMorris.vue";
  import blackBeardPage from "./blackbeard.vue";
  import maryReedPage from "./maryReed.vue";
  import anneBonnyPage from "./anneBonny.vue";

  const gotoSettings = () => {
    $navigateTo(settingsPage, {
      props: {imageProps,},});
  }

  const maritimeMuseum = () => {
    $navigateTo(maritimeMuseumPage, {
      props: {imageProps,},});
  }

  const jackRackham = () => {
    $navigateTo(jackRackhamPage, {
      props: {imageProps,},});
  }

  const cuttySark = () => {
    $navigateTo(cuttySarkPage, {
      props: {imageProps,},});
  }

  const captainKidd = () => {
    $navigateTo(captainKiddPage, {
      props: {imageProps,},});
  }

  const queenAnnesRevenge = () => {
    $navigateTo(queenAnnesRevengePage, {
      props: {imageProps,},});
  }

  const williamMorris = () => {
    $navigateTo(williamMorrisPage, {
      props: {imageProps,},});
  }

  const blackBeard = () => {
    $navigateTo(blackBeardPage, {
      props: {imageProps,},});
  }

  const maryReed = () => {
    $navigateTo(maryReedPage, {
      props: {imageProps,},});
  }

  const anneBonny = () => {
    $navigateTo(anneBonnyPage, {
      props: {imageProps,},});
  }
  
</script>

<style lang="scss">
    // Start custom common variables
    @import "@nativescript/theme/scss/variables/blue";
    // End custom common variables
    Page{
      background-color: #F4EEDD;
    }

    .charImg{
      background-color: #99DDFF;
      margin-top: 5%;
      width: 50%;
      border-width: 7; 
      border-color: #64AACD;
      border-radius: 20;

    }

    .mapImg{
      width: 80%;
      border-width: 7; 
      border-color: #BBAF95;
      border-radius: 20;
    }

    .helloMsg{
      margin-top: 2%;
      margin-bottom: 2%;
      font-weight: 200;
      font-size: 24;
      text-align: center; 
    }

    .headderTxt{
      margin-top: 2%;
      margin-left: 5%;
      margin-bottom: 2%;
      font-weight: 200;
      font-size: 24;
    }
    .text, .headderTxt, .bodyText, .treasureText, .helloMsg{
      font-family: 'Times New Roman', Times, serif;
    }

    // #stepText{
    //   font-size: 16;
    // }

    .bodyText, .treasureText{
      margin-top: 2%;
      margin-left: 10%;
      margin-bottom: 2%;
      font-weight: 200;
      font-size: 16;
      margin-right: 10%;
      width: 50%;
    }
    .treasureText{
      text-wrap: true;
      margin-left: 5%;
      width: 40%;
    }


    .nav-buttons{
      margin-top: 80%;
      position: absolute;
      background-color: red;
      width: 25%;
    }

    .friendPhoto{
      height: 96%;
      background-color: #99DDFF;
      margin-top: 2%;
      margin-bottom: 2%;
      margin-left: 5%;
      margin-right: 2%;
    }

    .friendInfo{
      width: 60%;
      margin-top: 2%;
      margin-bottom: 2%;
      background-color: #FAF9F6;
      border-width: 7; 
      border-color: #BBAF95;
      border-radius: 20;
    }

    // images

    .charImg, .friendPhoto, .treasureImageLeft, .treasureImageRight, .captainlogImg, .pfpbtn{
      border-width: 7; 
      border-color: #64AACD;
      border-radius: 20;
    }
    
    .treasureImageLeft{
      width: 35%;
      height: 100%;
      margin-top: 2%;
      margin-bottom: 2%;
      margin-left: 5%;
      margin-right: 10%;
      // background: #99DDFF;
      border-color: #BBAF95;


    }

    .treasureImageRight{
      width: 35%;
      margin-top: 2%;
      margin-bottom: 2%;
      margin-left: 10%;
      margin-right: 5%;
      border-color: #BBAF95;
    }
    // Custom styles

    .captainlogImg{
      width: 80%;
      margin-top: 50px;
      margin-bottom: 50px;
      border-width: 7; 
      border-color: #BBAF95;
      border-radius: 20;
    }

    .captainLogTxt{
      width: 90%;
      margin-top: 2%;
      margin-bottom: 2%;
      padding: 10%;
      background-color: #FAF9F6;
      border-width: 7; 
      border-color: #BBAF95;
      border-radius: 20;
      text-wrap: true;
    }

    .accountText{
      margin-top: 2%;
      margin-left: 10%;
      margin-bottom: 2%;
      font-weight: 200;
      font-size: 16;
      // text-align: center; 
      font-family: 'Times New Roman', Times, serif;
      // margin-right: 40%;
      width: 34%;
      // background-color: red;
    }


    .buttons{
      width: 42%;
      background-color: #DAD2BB;
      border-width: 7; 
      border-color: #BEB59B;
      border-radius: 20;

    }

</style>