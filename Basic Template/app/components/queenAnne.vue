<template>
    <Page class="background">
        <ActionBar title="Queen Anne's Revenge" style="background-color: #DAD2BB;">
        </ActionBar>
        <GridLayout>
            <ScrollView>
                <StackLayout>
                    <Image :src="imageProps.queenannesrev.image" class="captainlogImg" />
                    <Label class="captainLogTxt" :text="imageProps.queenannesrev.description"></Label>
                </StackLayout>
            </ScrollView>
        </GridLayout>
    </Page>
</template>

<script setup>
    import { GridLayout, StackLayout } from '@nativescript/core';
    const { imageProps } = defineProps(['imageProps']);
    import { knownFolders, File, ImageSource, path, Http } from "@nativescript/core";

</script>

<style lang="scss">
    @import "@nativescript/theme/scss/variables/blue";


</style>
