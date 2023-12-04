<template>
    <ul class="contact-list">
        <li v-for="contact in contacts" @click="navigate(`contact/${contact._id}`)" :key="contact._id">
            <ContactPreview :contact="contact" />
            <div class="control-btns">
                <button title="Edit Contact" @click.stop="navigate(`contact/edit/${contact._id}`)">
                    <img src="https://res.cloudinary.com/dollaguij/image/upload/v1699194260/svg/edit_fxztwg.svg" alt="">
                </button>
                <button title="Delete Contact" @click.stop="onRemove(contact._id)">
                    <img src="https://res.cloudinary.com/dollaguij/image/upload/v1699194245/svg/x_ti24ab.svg" alt="">
                </button>
            </div>
        </li>
    </ul>
</template>

<script>
import ContactPreview from './ContactPreview.vue';
export default {
    props: ['contacts'],
    methods: {
        onRemove(contactId) {
            this.$emit('remove', contactId)
        },
        navigate(page) {
            this.$router.push(page)
        }

    },
    components: {
        ContactPreview
    }
}
</script>

<style lang="scss">
.contact-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .5rem;
        border: 1px solid rgba(227, 167, 187, 0.581);
        border-radius: .5rem;
        margin-bottom: .5rem;
        height: 46px;

        // .control-btns {
        //     display: none;
        // }

        &:hover {
            color: white;
            cursor: pointer;
            background-color: rgba(227, 167, 187, 0.403);

            .control-btns {
                display: flex;
            }
        }
    }

    .control-btns {
        display: none;
    }

    button {
        width: 28px;
        height: 28px;
        border: none;
        border-radius: 50%;

        &:hover {
            scale: 1.1;
            background-color: transparent;
        }
    }

    img {
        width: 10px;
    }

    @media screen and (max-width: 500px) {
        .control-btns {
            display: flex;
        }
    }
}
</style>