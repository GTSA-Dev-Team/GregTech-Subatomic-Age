// priority: 100000

const $GTSACFluidSteamMachine = Java.loadClass('pl.epsi.gtsacore.api.machine.steam.FluidSimpleSteamMachine')
const $GTSACGuiTextures = Java.loadClass('pl.epsi.gtsacore.api.textures.GTSACGuiTextures')
const $CoilWorkableElectricMultiblockMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine")
const $GTSACRecipeModifiers = Java.loadClass('pl.epsi.gtsacore.api.recipes.GTSACRecipeModifiers')
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder')

const $GTCEuFluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $GTCEuFluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');
const $GTCEuFluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');

const tierToHullMap = {
    0: 'ulv',
    1: 'lv',
    2: 'mv',
    3: 'hv',
    4: 'ev',
    5: 'iv',
    6: 'luv',
    7: 'zpm',
    8: 'uv',
    9: 'uhv',
    10: 'uev',
    11: 'uiv',
    12: 'uxv',
    13: 'opv',
    14: 'max',
};














