<script>
import { about } from '../../lib/data/projects';
</script>

<div class="container">
    <h2>{about.title}</h2>
    <p>{about.content}</p>
    <img src={`/img/${about.image}`} alt="Profile">
</div>

<style>
    .container{
        /* Backgroundcolor behind text */
        background-color: #00000050; 
        border-radius: 25px;
        box-shadow: 0 8px 32px 0 rgba(190, 122, 128, 0.185); 
        backdrop-filter: blur( 6px ); 
        -webkit-backdrop-filter: blur( 4px ); 
    }

    div{
        padding: 5rem;
        width: 756px;
    }
    p{
        margin-top: 3rem;
        line-height: 2;
        margin-bottom: 5rem;
    }
    img {
        border-radius: 50%;
        width: 20vw;
    }
 
    @media (max-width: 1024px) {
        div{
            padding: 0rem;
            width: 100vw;
        }
        p{
            margin-top: 3rem;
            line-height: 2;
            padding: 3rem;
            margin-bottom: 0;
        }
        img {
            border-radius: 50%;
            width: 25vw;
        }
        h2{
            margin-top: 4rem;
        }
    }
</style>