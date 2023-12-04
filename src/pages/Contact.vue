<script >
import { contactService } from '../services/contactService'
import ContactList from '../cmps/ContactList.vue'
import ContactFilter from '../cmps/ContactFilter.vue'

export default {
    data() {
        return {
            filterBy: { txt: '' },
        }
    },
    async created() {
        try {
            this.$store.dispatch({ type: 'loadContacts' })
        } catch (err) {
            console.log(err)
        }
        // this.contacts = await contactService.getContacts()
    },
    methods: {
        async removeContact(contactId) {
            try {
                await this.$store.dispatch({ type: 'removeContact', contactId })
            } catch (err) {
                console.log(err)
            }
        },
        setFilterBy(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        contacts() {
            return this.$store.getters.contacts
        },
        filteredContacts() {
            const regex = new RegExp(this.filterBy.txt, 'i')
            return this.contacts.filter(contact => regex.test(contact.name))
        }

    },
    components: {
        ContactList,
        ContactFilter
    }
}
</script>

<template>
    <section class="contact-page">
        <h2>Your Contacts</h2>
        <div class="add-filter">
            <RouterLink to="contact/edit">
                <button title="New Contact" class="add-btn">
                    <img class="add-img" src="https://res.cloudinary.com/dollaguij/image/upload/v1699194276/svg/plus_tuhixu.svg" alt="">
                </button>
            </RouterLink>
            <ContactFilter @filter="setFilterBy" />
        </div>
        <ContactList v-on:remove="removeContact" v-if="contacts" :contacts="filteredContacts" />
    </section>
</template>

<style lang="scss">
.contact-page {
    margin: 1rem;
    min-height: calc(100vh - 64px - 2rem);

    .add-filter {
        display: flex;
        align-items: center;
        // justify-content: space-between;
        gap: .5rem;
    }

    .add-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 36px;
        height: 36px;
        border: none;
        border-radius: 50%;
    }

    img {
        width: 18px;
        filter: invert(98%) sepia(44%) saturate(1926%) hue-rotate(182deg) brightness(104%) contrast(86%);    }

    // text-align: center;
}
</style>