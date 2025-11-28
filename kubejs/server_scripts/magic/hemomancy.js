ServerEvents.recipes(event => {
  //cumium ingot recipe
  event.recipes.bloodmagic.altar('kubejs:bio_book', 'witherstormmod:command_block_book').upgradeLevel(4).altarSyphon(80000)
    
  //chapter one: biomancy + evilcraft
  event.remove({output:"evilcraft:blood_infusion_core"})
  event.recipes.ars_nouveau.enchanting_apparatus(
      [
        "evilcraft:dark_gem",
        "biomancy:primordial_core",
        "evilcraft:dark_gem"
      ],
      "biomancy:living_flesh",
      "evilcraft:blood_infusion_core",
      2000 // source cost
  )
});