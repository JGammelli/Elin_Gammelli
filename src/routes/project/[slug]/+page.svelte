<script>

  export let data;
  let activeProgramming = true;

  if(!data.isProgram){
    activeProgramming = false;
  }
  function changeRole(){
    console.log("CLICK");
    activeProgramming = !activeProgramming;
  }
  // function boldify(content) {
  //   return content.replace(/\*(.*?)\*/g, '<strong>$1</strong>');
  // }
</script>
<div class="jumpContainer">
  <a href="/">
    <svg class="backArrow" width="16" height="6" viewBox="0 0 16 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.6406 2.99992L1.35932 2.99992M1.35932 2.99992L3.62686 0.786368M1.35932 2.99992L3.62686 5.21347" stroke="#878787" stroke-linecap="round"/>
    </svg>
  </a>
  
  {#if data.jumpToCode}
  <a class="jump" href="#code">JUMP DOWN TO THE CODE <svg width="6" height="16" viewBox="0 0 6 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.00001 1.35934L3.00001 14.6407M3.00001 14.6407L0.786458 12.3731M3.00001 14.6407L5.21356 12.3731" stroke="#878787" stroke-linecap="round"/>
    </svg> 
  </a>
  {:else}
  <div></div>
  {/if}
</div>
<div class="container">
  
  
  <div class="backContainer">
   
  </div>
  <h1>{data.title}</h1>  
  <svg class="pointer"  width="97" height="35" viewBox="0 0 97 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M37.1014 1.99998L48.5 13.6221L59.8986 1.99998" stroke="#8E8E8E"/>
    <path d="M97 1.99998H59.8986" stroke="white" />
    <rect x="45.3182" y="4.35354" width="5" height="5" transform="rotate(-45 45.3182 4.35354)" fill="#589981"/>
    <path d="M37.1014 1.99998H0" stroke="white"/>
  </svg>

  <div class="projectContainer">
    <div class="projectItem">
<!--       
      {#if data.isDesign && data.isProgram}
        <div>
          <div class="roles">
            <div>
              <button id="rolePointer" on:click={changeRole}>
                <p>Programming</p>
                {#if activeProgramming}
                <svg class="pointer"  width="97" height="35" viewBox="0 0 97 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M37.1014 1.99998L48.5 13.6221L59.8986 1.99998" stroke="#8E8E8E"/>
                  <path d="M97 1.99998H59.8986" stroke="white" />
                  <rect x="45.3182" y="4.35354" width="5" height="5" transform="rotate(-45 45.3182 4.35354)" fill="#589981"/>
                  <path d="M37.1014 1.99998H0" stroke="white" />
                </svg>
                  {:else}
                    <svg class="pointer" width="98" height="2" viewBox="0 0 98 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 1H98" stroke="#8E8E8E"/>
                    </svg>
                {/if}
              </button>
            </div>
          
            <div>
              <button id="rolePointer" on:click={changeRole}>
                <p>Design</p>
                {#if !activeProgramming}
                <svg class="pointer"  width="97" height="35" viewBox="0 0 97 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M37.1014 1.99998L48.5 13.6221L59.8986 1.99998" stroke="#8E8E8E"/>
                  <path d="M97 1.99998H59.8986" stroke="white"/>
                  <rect x="45.3182" y="4.35354" width="5" height="5" transform="rotate(-45 45.3182 4.35354)" fill="#589981"/>
                  <path d="M37.1014 1.99998H0" stroke="white"/>
                </svg>
                  {:else}
                    <svg class="pointer"  width="98" height="2" viewBox="0 0 98 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 1H98" stroke="#8E8E8E"/>
                    </svg>
                {/if}
              </button>
            </div>
          </div>
        </div>
        {:else}
          {#if data.isDesign && !data.isProgram}
            <p>Design</p>
            <svg class="pointer"  width="97" height="35" viewBox="0 0 97 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37.1014 1.99998L48.5 13.6221L59.8986 1.99998" stroke="#8E8E8E"/>
              <path d="M97 1.99998H59.8986" stroke="white" />
              <rect x="45.3182" y="4.35354" width="5" height="5" transform="rotate(-45 45.3182 4.35354)" fill="#589981"/>
              <path d="M37.1014 1.99998H0" stroke="white"/>
            </svg>
          {:else}
            {#if !data.isDesign && data.isProgram}
            
            <p>Programming</p>
            <svg class="pointer"  width="97" height="35" viewBox="0 0 97 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37.1014 1.99998L48.5 13.6221L59.8986 1.99998" stroke="#8E8E8E"/>
              <path d="M97 1.99998H59.8986" stroke="white" />
              <rect x="45.3182" y="4.35354" width="5" height="5" transform="rotate(-45 45.3182 4.35354)" fill="#589981"/>
              <path d="M37.1014 1.99998H0" stroke="white"/>
            </svg>
            
            {/if}
        {/if}
      {/if} -->

      {#if activeProgramming}
      
      <div class="text">
        <p class="content">{@html data.programText?.replace(/!!(.*?)!!/g, (match, url) => {
  if (url.endsWith('.mp4')) {
    return `<video src="${url}" controls autoplay loop muted style="max-width: 1000px; max-height: 500px;"></video>`;
  } else {
    return `<a href="${url}" target="_blank"><img src="${url}" style="max-width: 1000px; max-height: 500px;"></a>`;
  }
}).replace(/\*(.*?)\*/g, '<b style="font-weight: 700;">$1</b>').replace(/##(.*?)##/g, `<h2>$1</h2>`).replace(/!!(.*?)!!/g, `<a href="$1" target="_blank"><img src="$1" style="max-width: 1000px; max-height: 500px;"></a>`).replace(/¤(.*?)¤/g, `<h2 id="code">$1</h2></a>`).replace(/__(.*?)__/g, `<div>$1</div>`)}</p>
      </div>
      
        {:else}
        <div class="text">
          <p class="content">{@html data.designText?.replace(/!!(.*?)!!/g, (match, url) => {
  if (url.endsWith('.mp4')) {
    return `<video src="${url}" controls autoplay loop muted style="max-width: 1000px; max-height: 500px;"></video>`;
  } else {
    return `<a href="${url}" target="_blank"><img src="${url}" style="max-width: 1000px; max-height: 500px;"></a>`;
  }
}).replace(/\*(.*?)\*/g, '<b style="font-weight: 700;">$1</b>').replace(/##(.*?)##/g, `<h2>$1</h2>`).replace(/!!(.*?)!!/g, `<a href="$1" target="_blank"><img src="$1" style="max-width: 1000px; max-height: 500px;">`).replace(/¤(.*?)¤/g, `<h2 id="code">$1</h2></a>`).replace(/__(.*?)__/g, `<div>$1</div>`)}</p>
        </div>
      {/if}
      {#if data.link !== undefined}
        <a id="bottom" class="link" href="{data.link}" target="blank">Read more and view the code on Github
          <svg width="16" height="6" viewBox="0 0 16 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.35935 2.99999H14.6407M14.6407 2.99999L12.3731 5.21354M14.6407 2.99999L12.3731 0.786438" stroke="#878787" stroke-linecap="round"/>
          </svg>
        </a>
      {/if}
      {#if data.linkItch !== undefined}
        <a id="bottom" class="link" href="{data.linkItch}" target="blank">View the game at Itch.io
          <svg width="16" height="6" viewBox="0 0 16 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.35935 2.99999H14.6407M14.6407 2.99999L12.3731 5.21354M14.6407 2.99999L12.3731 0.786438" stroke="#878787" stroke-linecap="round"/>
          </svg>
        </a>
      {/if}
      {#if data.linkDownload !== undefined}
        <a id="bottom" class="link" href="{data.linkDownload}" target="blank">Download game
          <svg width="16" height="6" viewBox="0 0 16 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.35935 2.99999H14.6407M14.6407 2.99999L12.3731 5.21354M14.6407 2.99999L12.3731 0.786438" stroke="#878787" stroke-linecap="round"/>
          </svg>
        </a>
      {/if}
    </div>
    <!-- <div class="projectItem">
       <img src={`http://drive.google.com/uc?export=view&id=${data.image}`}>
    </div> -->
  </div>
  
</div>



<style>
  h1{
    color: #ECC977;
  }
  .jump{
    color: #ECC977;
    text-decoration: underline;
    align-self: flex-end;
  }
  .text{
    white-space: pre-wrap;
  }
  rect{
    fill: #ECE8E1;
  }
  path{
    stroke: #B58A4D;
  }
  p{
    line-height: 2;
  }
  .pointer{
    scale: 1.2;
  }
  button {
    all: unset;
    cursor: pointer;
  }
  button:hover {
    color: #ECC977;
  }
  .content{
    margin-top: 2rem;
    margin-bottom: 2rem;

  }

  .roles{
    display: flex;
    margin-bottom: 1rem;
  }
  .container{
		margin: 5rem 25rem;
		text-align: center;
	}
  .jumpContainer{
    text-align: start;
    /* display: grid;
    grid-template-columns: 25% 25%; 
    gap: 50%; */
    display: flex;
    width: 100vw;
  }
	.projectContainer{
    display: flex;
    flex-direction: column;
	}
  .projectItem{
    margin: 2vw;
		/* margin-top: 8rem; */
  }
  img{
    width: 100%;
    max-width: 750px;
    border: 1px solid #ECC977;
  }
  .backContainer{
    max-width: 1402px;
    
  }
  a{
    text-align: start;

  }
  .backArrow{
    scale: 1.8;
  }
  .projectContainer {
		text-align: center;
	}
  .backArrow:hover{
    scale: 2.5;
  }
  .link:hover{
    color: #ECC977;
  } 
  .link{
    color: #ECC977;
  }
  @media (max-width: 1024px) {
    .projectContainer{
      flex-direction: column;
      width: 100%;
    }
    .container{
      width: 100vw;
      margin: 0rem 0rem;

    }
    img{
      max-width: 100vw;
      margin-top: 2rem;
    }
    .backContainer{
      max-width: 100vw;
    }
    .roles{
      margin-bottom: 0rem;
    }
    .projectItem{
      width: 70%;
      margin: 0vw;
      margin-top: 0rem;
      align-self: center;
    }
    .backArrow{
      scale: 1.8;
    }
    .backContainer{
      max-width: 100%;
      text-align: center;
      margin-bottom: 3rem;
    }
    h1{
      margin-bottom: 2rem;
    }
  }
</style>