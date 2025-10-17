export const about = {
  title: "Hi, I'm Leo!",
  content:
    "I have had a passion for games ever since my parents bought a Gameboy Advance and Pokemon LeafGreen cartridge. I love crafting mechanics, testing and improving them until they play and feel the way they should. I am a social, happy and driven person who works best in teams where communication is free flowing and clear. I am looking for a place where I can grow as a programmer and work together with a close knit team.",
  image: "leo.jpg",
};

export const contact = {
  title: "Reach out to me!",
  git: "https://github.com/LostmyCigar",
  email: "leo.wahlund@gmail.com",
  phone: "+46 760 397 664",
  linkedIn: "https://se.linkedin.com/in/leo-wahlund-628778201",
};

export const projects = [
  {
    title: `Vanagandar`,
    content: `Programming, Systems, Team, Unreal, Tactical Shooter, Recent`,
    description: `Short description`,
    image: `VanagandrMain.gif`,
    isDesign: false,
    isProgram: true,
    jumpToCode: true,
    programText: `This project was started as a graduation project for designers, meaning they could work fulltime on the project. I joined in as one of 3 programmers helping out with the project while still having courses on the side. 

    *Setting up the team for success*
    
    A slightly clickbait-y title with just a hint of hubris, but it describes how I worked within the project. 
    
    With a team full of designers that could work full time and programmers that could only work part time, we knew that a lot of work would fall to our (very skilled) technical designers. The problem with this is that larger systems sometimes tend to look like something straight from the kitchen in an Italian restaurant. Especially when fully built in blueprints. To prevent this I built the base for weapons in our game so that designers could easily create and add behavior-blueprints to them without having to poke around in the weapons themselves (aka Components). Recoil can be created for our weapons by simply creating a blueprint and defining what should happen in an inherited function. Then we can simply select to add this UObject class in a dropdown menu in our weapon and recoil just works (assuming the recoil itself is done right). 
    
    Here is how stuff looks for designers:
    !!/img/vandesign.png!!
    Weapon effects are deprecated, please ignore :)

    !!/img/van2.png!!
    Designers can now add and edit their blueprint behaviors inside the weapon.
    
    ##*The system*##
    The system is built around the fact that weapons are (as with a surprising amount of other common game mechanics) essentially split into three parts:
    
    *- When should I do thing?*
    *- How do I do thing?*
    *- What happens now that I have done thing?*
    
    (Thing, in this case, being shooting)
    
    The *WHEN*
    Constraints we call them, the class that handles if a weapon is allowed to shoot or not when the player sends us shoot input. Here we place things such as Fire Rate and Ammunition. When the weapon wants to know if it is allowed to shoot, it simply CheckConstraints() if they all return true (meaning we are allowed ofcourse).  
    
    !!/img/van3.png!!

    The *HOW*
    This part is broken down into two classes: Aim modifiers and Bullet Spawners.
    Aim Modifiers affect where we shoot and include things such as movement error and spread. These modifiers gets passed a Vector AimDirection by reference that they modify in the way they want before sending it forth to BulletSpawners.
     
    The actual shooting. The single trace, multi trace or multiple multi traces that we wanna do when shooting. All put together under the collective name “Bullet Spawner”. Unlike our constraints or Aim modifiers, a weapon can only have one bullet spawner, if we want to shoot multiple bullets we do that inside our bullet spawner. Bullet spawners pass on the results of their hits since we are working under the assumption that they are all hitscan. The results then get sent to the server for confirmation. This is done in our weapons Fire() function, in other words, not in our bullet spawner class.
    
    !!/img/van4.png!!
    
    The *What happens now that I have done thing?*
    Camera shake, recoil, dragon coming down from the sky and kidnapping the player. We call it aim modifiers, but in reality, anything that we might want to do now that the player fired its shot goes here. Now, if you look through the code you might notice that this class could technically just be ignored and its behaviors changed into “Bullet Modifiers”. We already have the information we need about the shooting, it no longer matters if the player is rotated 180°, the shot will hit the correct spot all the same. But the reason for this is simply; *structure*. Aim modifiers are (ironically) the things that should not affect our aim direction, why even give them access to it. This is also why we are not using one, larger class for weapon behaviors with 3 different functions for our different types, it reduces the risk of human error. 
    
    To add to this, Order of execution is also important in our code. Bullet modifiers are important to our shooting, they affect where our bullet lands, what if they need to know exactly our original aim direction? The aim direction they have access to might have already been offset by another modifier and in that case they need the camera direction to find the original again (although they should probably be given the original aim direction in addition to the modified one in the first place, oh well). If the camera rotation has been affected by recoil at this point, finding the original aim direction is no longer possible.
    
    ¤*The Code*¤
    Our Weapons references to its behaviors:

    Thanks to the nifty UProperty specifier “Instanced” our UObject classes are, well, instanced and therefore selectable in the Blueprint Details.

    !!/img/van5.png!!

    Our *WeaponBehaviour* base:

    This class could use the DefaultToInstanced specifier. But since this system is heavily influenced by Unreal Engine's own InputActions and triggers, I decided to keep it similar.

    !!/img/van6.png!!

    The *AimModifier* class (Constraints and BulletModifiers look very similar to this):

    !!/img/van7.png!!

    `,
    link: "https://github.com/LostmyCigar/Vanagandar",
  },
  {
    title: `Tomb of Alar`,
    content: `Programming, Tools, Team, Unreal, TopDown`,
    description: `Having betrayed its allies, a wraith now seeks to escape the tomb with its newfound immortality.
    Tomb of Alar is a twin stick shooter worked on full time over the course of 4 weeks. The team goal was to deliver a polished game in a short timeframe.    
    `,
    image: `ToAMain.gif`,
    isDesign: false,
    isProgram: true,
    programText: `
      *Thickness* 
      !!Space!!
      ##*Header*##
      Path to images: /img/imagename.png
          `,
    link: "https://github.com/LostmyCigar/TombOfAlar", 
    }
];
