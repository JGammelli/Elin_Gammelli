<script>
import { projects } from '../lib/data/projects';
</script>

<div>
	<div class="container">
		{#each projects as project}
            <div class="projectContainer">
				<div class="project">
					
					<div class="img" style= {`background: url('/img/${project.image}') no-repeat; background-size: cover;`}>
						<div class="svg">				
							<div class="textContainer">
								<div class="text">
									<h2>
										<a href={`/project/${project.title}`}>{project.title}</a>
									</h2>
									<p class="description">{project.description}</p>
									<p class="tag">{project.content}</p>
								</div>
							</div>
							<div class="pointer">
								<a href={`/project/${project.title}`}>
								<svg class="svgPointer" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect x="0.707107" y="36" width="49.9117" height="49.9117" transform="rotate(-45 0.707107 36)" fill="#ff9d42" stroke="#878787" />
									<path d="M42.6406 35.9999H29.3593M29.3593 35.9999L31.6269 33.7864M29.3593 35.9999L31.6269 38.2135" stroke="#878787" stroke-linecap="round"/>
								</svg></a>
							</div>
						</div>
					</div>
				</div>
			</div>
        {:else}
            <div>Bringing the projects...</div>
        {/each}
	</div>
    
</div>


<style>
	h2 a{
		color: #B58A4E;
		font-weight: 700;
	}
	.tag{
		font-size: .9rem;
		font-weight: 700;
		color: #B58A4E;
	}
	.svgPointer rect, path{
		fill: #021826de;
		stroke: #B58A4E;
	}
	.container{
		display: flex;
		justify-content: space-around;
		flex-flow: row wrap;
		margin: 5rem 15vw;
		text-align: center;

	}
	.projectContainer{
		width: 50%;
		margin-bottom: 10rem;
	}
	.project{
		margin: 0 2vw;
		height: 17vw;
	}
	.img{
		max-width: 794px;
		height: 100%;
		border: 2px solid #B58A4E;

	}
	.svg{
		position: relative;
		max-width: 794px;
		height: 100%;
		object-fit: fill;
	}
	.textContainer{
		position: absolute;
		bottom: 0vw;
		left: 0vw;
		text-align: start;
		background-color: #021826de;
		width: 100%;
	}
	.text{
		padding: 1vw;
	}
	.pointer{
		position: absolute;
		right: 0vw;
  		transform: scaleX(-1);
		padding: 1vw;
	}
	.svgPointer:hover{
		scale: 1.3;
	}
	p{
		padding-top: 1rem;
		font-size: 1rem;

	}

	a:hover{
		color: #B58A4E;
		font-size: 1.5rem;
	}

	
	@media (max-width: 1024px) {
	
		.text{
			position: absolute;
			bottom: 1vw;
			left: 1vw;
			text-align: start;
		}
		.text p{
			display: none;
		}
		.text h2 a{
			font-size: 1rem;
		}
		.pointer{
			bottom: 0;
			right:  0;
			scale: .5;
		}
			.svgPointer rect, path{
			fill: #021826;
			stroke: #B58A4E;
		}
		@media (max-width: 780px) {

			.text h2 a{
				font-size: .7rem;
			}
		}
	}
</style>