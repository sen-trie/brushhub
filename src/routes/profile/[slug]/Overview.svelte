<script lang="ts">
    import type { ComponentProps } from 'svelte';
    let { props }: ComponentProps<any> = $props();
    const artist = props[0];
</script>

<div class="content-section">
    <div class="bio">
        <p>{artist.bio}</p>
        <p><i class="fas fa-map-marker-alt"></i> {artist.location}</p>
        <p><i class="fas fa-language"></i> {artist.languages.join(', ')}</p>
        <a href="https://{artist.youtube}" target="_blank" class="social-link"
            >{artist.youtube}</a
        >
        <a href="https://{artist.twitter}" target="_blank" class="social-link"
            >{artist.twitter}</a
        >
    </div>

    <div class="featured-artworks">
        <h3>Featured Artworks</h3>
        <div class="artwork-grid">
            <div class="artwork" v-for="n in 3">
                <!-- <img src="/images/sample-artwork.jpg" alt="Artwork" class="artwork-img" /> -->
                <button class="remove-button"><i class="fas fa-times"></i></button>
            </div>
        </div>
    </div>

    <div class="services">
        <h3>Services</h3>
        <button class="my-services-button">My Services &gt;</button>
    </div>
</div>