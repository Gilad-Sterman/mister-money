<template>
    <article class="contact-preview">
        <h2>{{ contact.name }}</h2>
        <p>{{ contact.phone }}</p>
    </article>
</template>

<script>
export default {
    props: ['contact'],
    methods: {
        onRemove(contactId) {
            this.$emit('remove', contactId)
        }
    }
}
</script>

<style lang="scss">
.contact-preview {
    display: flex;
    gap: 1rem;
    align-items: center;

    h2 {
        font-size: 1rem;
        margin: 0;
        width: 200px;
    }

    p {
        color: rgba(230, 230, 230, 0.795);
        font-size: smaller;
    }

    a {
        place-self: end;
    }

    @media screen and (max-width: 500px) {
        h2 {
            font-size: smaller;
            width: 100px;
        }

        p {
            font-size: .75rem;
        }
    }
}
</style>