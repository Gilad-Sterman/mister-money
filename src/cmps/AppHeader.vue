<template>
    <header>
        <RouterLink to="/">
            <img src="https://res.cloudinary.com/dollaguij/image/upload/v1700645562/bitcoin_tvyded.png" alt="">
        </RouterLink>
        <nav>
            <RouterLink title="Home" to="/">
                <img class="nav-img" src="https://res.cloudinary.com/dollaguij/image/upload/v1699194264/svg/home_l4p7sr.svg"
                    alt="">
            </RouterLink> 
            <RouterLink title="Contacts" to="/contact">
                <img class="nav-img" src="https://res.cloudinary.com/dollaguij/image/upload/v1699194287/svg/sort_ys5buy.svg"
                    alt="">
            </RouterLink> 
            <RouterLink title="statistics" to="/about">
                <img class="nav-img" src="https://res.cloudinary.com/dollaguij/image/upload/v1699194220/svg/empty-library_vbnmu6.svg"
                    alt="">
            </RouterLink>
        </nav>
    </header>
</template>
<script>
export default {

}
</script>
<style lang="scss">
header {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem;
    background: linear-gradient(#380a87, #8b61d3);
    width: 100%;
    z-index: 100;

    nav {
        display: flex;
        gap: 1rem;
    }

    img {
        width: 48px;
    }

    .nav-img {
        width: 32px;
        filter: invert(98%) sepia(44%) saturate(1926%) hue-rotate(182deg) brightness(104%) contrast(86%);    }

    .router-link-active {
        // color: #13062c;

        .nav-img {
            filter: invert(6%) sepia(32%) saturate(7342%) hue-rotate(255deg) brightness(65%) contrast(103%);
        }
    }
}</style>