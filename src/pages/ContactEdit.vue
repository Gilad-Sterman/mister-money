<template>
    <section v-if="contact" class="contact-edit">
        <RouterLink to="/contact">
            <button title="Back">
                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1699194252/svg/back_zfwsnj.svg" alt="">
            </button>
        </RouterLink>
        <form @submit.prevent="onSaveContact">
            <input v-model="contact.name" type="text" autofocus placeholder="Name">
            <input v-model="contact.email" type="email" placeholder="Email">
            <input v-model="contact.phone" type="tel" placeholder="Phone">
            <button>Save</button>
        </form>
    </section>
</template>

<script>
import { contactService } from '../services/contactService';
export default {

    data() {
        return {
            contact: null
        }
    },
    methods: {
        async onSaveContact() {
            try {
                await this.$store.dispatch({ type: 'saveContact', contact: JSON.parse(JSON.stringify(this.contact)) })
            } catch (err) {
                console.log(err);
            }
            // await contactService.saveContact(this.contact)
            this.$router.push('/contact')
        }
    },
    computed: {
        contacts() { return this.$store.getters.contacts }
    },
    created() {
        const contactId = this.$route.params.contactId
        if (contactId) {
            const contact = this.contacts.find(contact => contact._id === contactId)
            this.contact = JSON.parse(JSON.stringify(contact))
        } else {
            this.contact = contactService.getEmptyContact()
        }
    }
}
</script>
  
<style lang="scss">
.contact-edit {
    height: 100vh;
    margin: 1rem;

    form {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        padding: 1rem;
        border: 1px solid palevioletred;
        border-radius: .5rem;
        margin-bottom: .5rem;

        button {
            margin-top: 1rem;
            width: max-content;
            place-self: center;
        }
    }

    a {
        margin-bottom: 1rem;
    }

    button {
        padding: .25rem .5rem;

        img {
            filter: invert(98%) sepia(44%) saturate(1926%) hue-rotate(182deg) brightness(104%) contrast(86%);        }
    }
}
</style>