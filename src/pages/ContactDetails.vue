<template>
    <section v-if="contact" class="contact-details">
        <RouterLink to="/contact">
            <button title="Back">
                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1699194252/svg/back_zfwsnj.svg" alt="">
            </button>
        </RouterLink>
        <div class="contact-info">
            <h2>{{ contact.name }}</h2>
            <img :src="url" alt="">
            <p>Email: <span>{{ contact.email }}</span></p>
            <p>Phone: <span>{{ contact.phone }}</span> </p>
        </div>
    </section>
</template>

<script>
import { contactService } from '../services/contactService'
export default {
    data() {
        return {
            contact: null,
            url: null
        }
    },
    async created() {
        const contactId = this.$route.params.contactId
        this.contact = await contactService.getContactById(contactId)
        this.url = `https://robohash.org/${this.contact._id}?set=set5`
    }
}
</script>

<style lang="scss">
.contact-details {
    // height: 100vh;
    margin: 1rem;
    display: flex;
    flex-direction: column;

    .contact-info {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        padding: 1rem;
        border: 1px solid palevioletred;
        border-radius: 1rem;

        img {
            place-self: end;
            width: 132px;
            border-radius: 50%;
            border: 1px solid palevioletred;
        }

        p {
            grid-column: 1;
            font-weight: bold;
        }

        span {
            color: palevioletred;
        }
    }

    a {
        margin-bottom: 1rem;
        place-self: start;

        button {
            padding: .25rem .5rem;

            img {
                filter: invert(98%) sepia(44%) saturate(1926%) hue-rotate(182deg) brightness(104%) contrast(86%);            }
        }
    }

    @media screen and (max-width: 500px) {
        .contact-info {
            display: flex;
            flex-direction: column;
            gap: .5rem;
            align-items: start;

            img {
                place-self: center;
            }
        }
    }
}
</style>