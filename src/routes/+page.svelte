<script lang="ts">
	const images: any = import.meta.glob(['$lib/assets/artwork/**'], { eager: true, query: '?url', import: 'default' });

	const items = [
	  { id: 1, imgSrc: 'test.jpg', closed: false },
	  { id: 2, imgSrc: 'test.jpg', closed: false },
	  { id: 3, imgSrc: 'test.jpg', closed: false },
	  { id: 4, imgSrc: 'test.jpg', closed: false },
	  { id: 5, imgSrc: 'test.jpg', closed: true },
	];
  </script>
  
  <div class="container mx-auto px-4">
	<div class="flex items-center mb-4">
	  <h2 class="text-2xl font-bold text-orange-500 mr-4">Explore</h2>
	  <h3 class="text-2xl font-bold text-gray-400">Following</h3>
	  <div class="ml-auto">
		<button class="text-orange-500 flex items-center">
		  <i class="fas fa-filter mr-2"></i>Filter...
		</button>
	  </div>
	</div>
  
	<div class="grid grid-cols-4 gap-4">
	  {#each items as item}
		<div class="relative bg-white border rounded-lg shadow overflow-hidden">
		  <img src={images["/src/lib/assets/artwork/" + item.imgSrc]} alt="Artwork" class="w-full h-48 object-cover" />
		  <div class="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 cursor-default">
			<i class="fas fa-times text-xs"></i>
		  </div>
		  {#if item.closed}
			<span class="absolute top-2 left-2 bg-gray-700 text-white px-2 py-1 text-xs rounded">Closed</span>
		  {/if}
		</div>
	  {/each}
	</div>
  </div>
  
  <style>
	.container {
	  max-width: 1200px;
	}
	.grid div .fa-times {
	  pointer-events: none;
	}
  </style>
  