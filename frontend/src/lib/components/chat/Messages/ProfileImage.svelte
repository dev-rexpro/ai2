<script lang="ts">
	import { REXPRO_BASE_URL } from "$lib/constants";
	import { safeImageUrl } from "$lib/utils/safeImageUrl";

	export let className = "size-8";
	export let src = `${REXPRO_BASE_URL}/static/favicon.png`;
</script>

<img
	aria-hidden="true"
	src={safeImageUrl(src)}
	class=" {className} object-cover rounded-lg"
	alt="profile"
	draggable="false"
/>

