<script lang="ts">
    import { Icon, Link } from 'svelte-hero-icons';
    import { getSingle } from "$lib/db";

    const creatorArray = [
        {
            name: 'sentrie',
            dp: '1.jpg',
            role: 'Developer and Artist',
            links: {
                'https://sen-trie.github.io/portfolio/': 'Portfolio',
                'https://github.com/sen-trie/': 'Github'
            }
        }, {
            name: 'sentrie',
            dp: '1.jpg',
            role: 'Developer and Artist',
            links: {
                'https://sen-trie.github.io/portfolio/': 'Portfolio',
                'https://github.com/sen-trie/': 'Github'
            }
        }, {
            name: 'sentrie',
            dp: '1.jpg',
            role: 'Developer and Artist',
            links: {
                'https://sen-trie.github.io/portfolio/': 'Portfolio',
                'https://github.com/sen-trie/': 'Github'
            }
        }, {
            name: 'sentrie',
            dp: '1.jpg',
            role: 'Developer and Artist',
            links: {
                'https://sen-trie.github.io/portfolio/': 'Portfolio',
                'https://github.com/sen-trie/': 'Github'
            }
        }
    ]
</script>

{#snippet card(creator: Record<string, any>)}
    <div class="card-container flex w-auto items-center space-x-4 p-6 py-3">
        <img
            src={getSingle('dp', creator.dp)}
            alt={`sentrie's avatar`}
            class="h-16 w-16 rounded-full border border-gray-700 shadow"
        />
        <div class="flex-1">
            <p class="text-lg font-semibold">@{creator.name}</p>
            <p class="text-sm text-gray-400 mb-1">{creator.role}</p>
            <div class="text-sm flex flex-col">
                {#each Object.entries(creator.links) as [link, text]}
                    <div class="flex justify-start items-center space-x-1">
                        <Icon src={Link} size="16" />
                        <a href={link}>{text}</a>
                    </div>
                {/each}
            </div>
        </div>
    </div>
{/snippet}

<h1 class="mb-2 text-2xl font-bold">About BrushHub</h1>
<div class="space-y-4 text-lg font-medium">
    <div>    
        <p>What is BrushHub?</p>
        <p class="text-base font-normal">BrushHub is a front-end showcase aimed at demonstrating 
            the concept and user experience of an artwork commissioning platform. This project
            primarily focuses on building the design and UX of an online e-commerce platform. It does not 
            include any backend services or database management systems.
        </p>
    </div>
    <div>    
        <p>Creators</p>
        <div class="grid grid-cols-4 gap-4 p-2">
            {#each creatorArray as creator}
                {@render card(creator)}
            {/each}
        </div>
    </div>
    <div>    
        <p>What is BrushHub?</p>
        <p class="text-base font-medium">BrushHub is a front-end only </p>
    </div>
</div>