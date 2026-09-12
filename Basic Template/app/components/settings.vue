<template>
    <Page class="background">
      <ActionBar title="Settings" style="background-color: #DAD2BB;">
      </ActionBar>

            <TabView style="tabBackgroundColor: #DAD2BB; tabTextFontSize: 16; tabTextColor: #000000;">
              <TabViewItem title="Profile" >
                  
                <GridLayout>
                  <StackLayout>
                    <!-- <Label :text="nameText"></Label> -->
                    <!-- <TextField :text="nameText" v-model="usersname"></TextField>
                  <Button @tap="updateName">Update Name</Button> -->
                  <!-- <Label text="Second Tab Content" textAlignment="center" verticalAlignment="center"></Label> -->
                    <Label class="headderTxt">Name</Label>
                    <TextField class="buttons" style="width: 80%; margin-top: 1%; text-align: center; font-size: 24;">Captain</TextField>
                  
                    <Label class="headderTxt">Icon</Label>
                    <StackLayout orientation="horizontal"> 
                      <Image :src="imageProps.octopuscharacter.image" width="30%" class="pfpbtn" style="margin-left: 5%;"/>

                      <StackLayout>
                      <Image :src="imageProps.octopuscharacter.image" width="60" class="pfpbtn"/>
                      <Image :src="imageProps.mycharacter.image" width="60" class="pfpbtn"/>
                      </StackLayout>

                      <StackLayout>
                        <Image :src="imageProps.fishcharacter.image" width="60" class="pfpbtn"/>
                        <Image :src="imageProps.blondecharacter.image" width="60" class="pfpbtn"/>
                      </StackLayout>

                      <StackLayout>
                        <Image :src="imageProps.parrotcharacter.image" width="60" class="pfpbtn"/>
                       <Image :src="imageProps.purplecharacter.image" width="60" class="pfpbtn"/>
                      </StackLayout>

                    </StackLayout>

                    <Label class="headderTxt">Colours</Label>
                    <StackLayout orientation="horizontal"> 
                      <Image :src="imageProps.octopuscharacter.image" width="30%" class="pfpbtn" style="margin-left: 5%;" />

                      <StackLayout>
                      <Image width="60" height="60" class="pfpbtn" style="background-color: #EE7F81; border-color: #C94F52;"/>
                      <Image width="60" height="60" class="pfpbtn"/>

                      </StackLayout>

                      <StackLayout>
                        <Image width="60" height="60" class="pfpbtn" style="background-color: #FFE656; border-color: #BEAA3A;"/>

                        <Image width="60" height="60" class="pfpbtn" style="background-color: #CE7FEE; border-color: #A74FC9;"/>
                      </StackLayout>

                      <StackLayout>
                        <Image width="60" height="60" class="pfpbtn" style="background-color: #88D791; border-color: #5A9C62;"/>

                        <Image width="60" height="60" class="pfpbtn" style="background-color: #EE7FD6; border-color: #C94F98;"/>
                      </StackLayout>

                    </StackLayout>

                    <Button class="buttons" style="width: 80%; margin-top: 5%; text-align: center;">Custom Character</Button>


                  </StackLayout>
                </GridLayout>
              </TabViewItem>
              <TabViewItem title="Options">
                <GridLayout>
                  <StackLayout>
                    <Label class="headderTxt">Display Mode</Label>
                      <StackLayout orientation="horizontal">
                        <Button class="buttons">Light</Button>
                        <Button class="buttons">Dark</Button>
                      </StackLayout>

                    <Label class="headderTxt">Notifications</Label>
                      <StackLayout orientation="horizontal">
                        <Label class="bodyText">New Treasure Found</Label>
                        <Switch />
                      </StackLayout>
                      <StackLayout orientation="horizontal">
                        <Label class="bodyText">Voyage Reminder</Label>
                        <Switch />
                      </StackLayout>
                      <StackLayout orientation="horizontal">
                        <Label class="bodyText">Friend Activity</Label>
                        <Switch />
                      </StackLayout>

                    <Label class="headderTxt">Preferencces</Label>
                      <StackLayout orientation="horizontal">
                        <Label class="bodyText">Location Services</Label>
                        <Switch />
                      </StackLayout>
                      <StackLayout orientation="horizontal">
                        <Label class="bodyText">Data Usage</Label>
                        <Switch />
                      </StackLayout>

                    <Label class="headderTxt">Account Settings</Label>
                      <StackLayout orientation="horizontal">
                        <Label class="accountText">Email</Label>
                        <Label class="accountText">MyEmail123@gmail.com</Label>
                      </StackLayout>
                      <StackLayout orientation="horizontal">
                        <Label class="accountText">Password</Label>
                        <TextField class="accountText" secure="true" text="Password"/>
                      </StackLayout>
                      <Button class="buttons"style="width: 80%; color: red; margin-top: 5%;">Delete Account</Button>

                  </StackLayout>
                </GridLayout>
              </TabViewItem>
            </TabView>
            

      
      
      


    </Page>
</template>

<script setup>

  import { StackLayout } from '@nativescript/core';
  import { ref } from "nativescript-vue";
  const { imageProps } = defineProps(['imageProps']);


</script>

<style lang="scss">
    // Start custom common variables
    @import "@nativescript/theme/scss/variables/blue";
    // End custom common variables


    .pfpbtn{
      background-color: #99DDFF;
      margin: 5;
      border-width: 5; 

    }
    

    
    


    // Custom styles

</style>
