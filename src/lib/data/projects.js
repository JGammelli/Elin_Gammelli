export const about = {
  title: "Hi, I'm Elin!",
  content:
    "I have had a passion for games ever since my parents bought a Gameboy Advance and Pokemon LeafGreen cartridge. I love crafting mechanics, testing and improving them until they play and feel the way they should. I am a social, happy and driven person who works best in teams where communication is free flowing and clear. I am looking for a place where I can grow as a programmer and work together with a close knit team.",
  image: "",
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
    title: `Lanthera`,
    content: `Programming C#/HLSL, Shaders, Compute shaders, Unity, Perforce, Team`,
    description: `Created compute/-shaders, and connecting them to gameplay
    `,
    image: `gp2.mp4`,
    isDesign: false,
    isProgram: true,
    programText: `##Features of the computeshaders, shaders, and gameplay integration,##
      !!/img/gp2.mp4!!
      This was a very exciting project for me, as this was the first time I got to work with, and learn, shaders and compute shaders. The project lasted just under four weeks, with a proof of concept needed within 2 weeks.
      The GDC talk for "Kena bridge of Spirits" was a great source for inspiration of implementation.
      To make this easier for designers and programmers to use, *I made video tutorials* to help them.
      !!/img/gp2move.mp4!!
      To achive the effect of light spreading, I used a texture, which represented the propogated light in the red channel in argb2101010 texture, light height in the blue channel, and lightsource in the alpha channel. A game object was responsible for calculating the XY world position as well as the Z wolrd position for the texture, also to follow the player. As the player moves, the offset also has to move with the player, this requires the texture pixels to move aswell. Therefore, the offset only moved if the player had moved sufficiently far away from previously calculated position.
      !!/img/invisblending.png!!
      To transfer data to my shaders for monochrome, visible, and invisible effects, I created a shader manager game object, which transfered this data to each material of those shaders. Then, in the shaders I compared the fragment world position with the propogated light texture world position to determine alpha, alpha clipping, and if the texture should be monochrome or not.
      The shader manager was also responsible to update and validate the game object light sources(which handeled their initial registration by themselves).
      !!/img/gp2delegate.png!!
      The light delegates similarly registered themselves to the shader manager, which then kept track of them. These performed asynchronous GPU read backs every few frames, to then delegate a read light value in the world, and forwarded it to linked light sources.
      !!/img/gp2height.png!!
      Since the world z height was tracked, and mapped in the texture, I could calculate, to some degree, how much light/color should be spread upwards (or technically limit the height). Of course, this causes issue if multiple lights are close by, which could be resolved in multiple ways.
          `,
    linkItch: "https://futuregames.itch.io/lanthera", 
    },
     {
    title: `Raymarching`,
    content: `Programming HLSL/GLSL/C#/C++, OpenGL, Unity`,
    description: `Raymarching in both OpenGL and Unity 
    `,
    image: `raymarch.mp4`,
    isDesign: false,
    isProgram: true,
    programText: `!!/img/raymarch.mp4!!
    Simple Raymarching done in OpenGL and Unity, with normal calculations and shadowing from a single directional light.
    !!/img/raymarcherror.png!!
    To avoid the issue of reaching the maximum number of allowed steps without finding a collision, I added some simple optimization for the ray to adjust it's step size based on how close it was from reaching it's maximum number of steps. That optimization solved the issue of unresolved pixels.
    !!/img/raymarchfix.png!!
    Some "optimization" for the raymarching steps, to be more aggressive as it approaches the maximum allowed number of steps.
    !!/img/raymarch.png!!
    Shadows were implemented in the most trivial way. After a ray has hit a surface, it will then traverse towards the single directional light and record it's closest approach. The closest approach is then smooth stepped to create a smooth border for the shadow. This has the negative effect of making the shadow encroach on the lit area, while realistically it should be the opposite.
          `,
    },
    {
    title: `Røsvik`,
    content: `Blueprints, materials, lanscape materials, PCG, UE5, Perforce, Team`,
    description: `General blueprint 'coding', and some materials and PCG work    
    `,
    image: `grasssway.mp4`,
    isDesign: false,
    isProgram: true,
    programText: `This was another group project.
    Unfortunately, the lead designers did not let us use C++ in the project, so we had to do everyting in Blueprints.
      !!/img/gp3grass.mp4!!
      The most fun thing I did in this project was to make a neater grass sway vertex animation for the grass, I did this because the bundeled-in grass sway in UE5 does not look right.
      The grass meshes were 15 vertices per billboard, they were not vertex painted (which allowed me to test some fun workarounds). The grass samples the landscapes runtime virtual texture (RVT), to gain it's height position, for which I can then let the vertexes determine how high up they are relative to the ground, to adjust swaying strength.
      I used PrismaticaDev's "Simple-ish Grass Wind" youtube video as a large inspiration, but it was a little difficult to quite see what he did, so much of it was improvised (once I got the idea of how I'd do it).
      I also used a precumputed horizontal to vertical ratio based on the horizontal grass sway, to tame the visible stretching the grass would otherwise be subjected to.
      !!/img/gp3optimize.png!!
      I put in effort to optimize the grass, as there was a lot of grass visible. Without the vertex pain, I needed to sample the lanscape height data from the RVT (object position does not work here). One significant issue was that to sample the RVT in the vertex shader, I would need to manually set this up sampling, or touch the RVT in the fragment shader. To circumvent both of these issues, I extended the colored RVT and placed this information in unused channels.
      !!/img/gp3rvt.png!!
      As seen above, I could place both world height and a shadow masking strength into the unused channels roughness and spectular (worldheight is not a real channel here). This meant I only needed to sample a single RVT for all the data I needed.
      !!/img/gp3shadow.png!!
      As can be observed, with some difficulty, the grass in the shadow is not properly shadowed. This was an issue caused by using an unlit shader for the grass, as a lit shader did not work well with the billboard grass or the ovral aesthetic. To handle this issue, I utilized another mask in the landscaping tool, which was written into the RVT as seen previously, and then sampled in the fragment shader to darken the grass. This meant, static deeper shadows could be painted in through the landscape.
      !!/img/gp3masks.png!!
      Since some suggested we use PCG, I wanted to learn to use it. Though, we still had an enviornmental artist who I did not want to steal work from, I created masks for the landscape material that would allow the artist to paint in various things, such as rocks, grass, branches, and trees. After painted in, PCG would use probability for positions with overlapping masks to generate appropriate meshes (note: trees and rocks did not have centered pivots, causing issues). I also created a scaling mask, so that it was easy to increase scale in certain areas, or decrease scale.
          `,
    linkItch: "https://futuregames.itch.io/rosvik", 
    },
     {
    title: `avrboy snake`,
    content: `Programming AVR 8/16bit assembly`,
    description: `Snake without apples in assembly    
    `,
    image: `assembly.mp4`,
    isDesign: false,
    isProgram: true,
    programText: `!!/img/assembly.mp4!!
    This is a partial snake, which I wrote in assembly. I quite enjoyed this project, as I feel I got a much better understanding of how programming and computers worked by making this tiny "game". This uses 8bit registers with two pair of high and low registers for 16bit addressing. I used some marshalling for the snake body pieces for memory effiency, which has the added benefit of appearing on the opposite edge when entering out of bounds.
    I did not create the emulator, however, the code should work on an arduino with correctly attached joystick and 8x8 led matrix.
          `,
    link: "https://github.com/wizzeg/Snake-AVR-assembly", 
    }/*,
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
      !!Space ny rad!!
      ##*Header*##
      Path to images: /img/imagename.png
          `,
    link: "https://github.com/LostmyCigar/TombOfAlar", 
    },
    {
      title: `Vanagandar`,
    content: `Programming, Systems, Team, Unreal, Tactical Shooter, Recent`,
    description: `Short description`,
    image: `VanagandrMain.gif`,
    isDesign: false,
    isProgram: true,
    jumpToCode: false,
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
  },*/
];