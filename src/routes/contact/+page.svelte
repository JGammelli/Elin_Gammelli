<script>
import { contact } from '../../lib/data/projects';
</script>

<div class="container">
    <h2>{contact.title}</h2>


    <div class="content">
        <p>Email: </p>
        <p class="end">{contact.email}</p>
    </div>
    <div class="content">
        <p>Phone: </p>
        <p class="end">{contact.phone}</p>
    </div>
    <div class="content">
        <p>Git: </p>
        <a class="end" href="{contact.git}" target=”_blank”>LostmyCigar</a>
    </div>
    <div class="content">
        <p>LinkedIn: </p>
        <a class="end" href="{contact.linkedIn}" target=”_blank”>Leo Wahlund</a>
    </div>
</div>

<style>

    .end{
        text-align: center !important; 
    }
    .content{
        display: flex;
        justify-content: space-between;
        text-align: start !important; 
        padding: 2rem 5rem;

    }
    .content p, a{
        margin: 0;
    }

    a:hover{
        color: #ECC977;
    }
    a{
        text-decoration: underline;
        text-underline-offset: 0.25em;
    }
    .container{
        padding: 5rem;
        width: 756px;
        
    }
    h2{
        margin-bottom: 3rem;
    }
    @media (max-width: 1024px) {
        .content{
            padding: 2rem 7rem;

        }
        .content p, a{
            margin: 0;
        }

        a:hover{
            color: #ECC977;
        }
        .container{
            padding: 0rem;
            width: 100vw;
        }
        h2{
            margin-top: 4rem;
        }

    }
</style>