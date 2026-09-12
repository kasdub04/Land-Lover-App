
<template>
    <Page class="background">
        <ActionBar title="Maritime Museum" style="background-color: #DAD2BB;">
        </ActionBar>
        <GridLayout>
            <ScrollView>
                <StackLayout>
                    <Image :src="imageProps.maritime.image" class="captainlogImg" />
                    <Label class="captainLogTxt" :text="imageProps.maritime.description"></Label>
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
