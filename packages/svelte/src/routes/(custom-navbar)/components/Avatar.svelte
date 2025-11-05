<script lang="ts">
	import { Avatar, Card, Gap, Spacer } from '$lib/index.js';
</script>

<Card>
	<h3>Avatar</h3>
	<Gap />
	<Spacer align="center">
		<Avatar
			src="https://pbs.twimg.com/profile_images/1853781754781548544/CibXf7vx_400x400.jpg"
			alt="cuikho210 x avatar"
		>
			{#snippet fallback()}
				CK
			{/snippet}
		</Avatar>

		<Avatar
			src="https://pbs.twimg.com/media/Gc6_gRlaAAIhzzF?format=jpg&name=large"
			alt="Yorushika"
			size="96px"
		/>

		<Avatar
			src="https://avatars.githubusercontent.com/u/86552587?v=4"
			alt="cuikho210 github avatar"
			size="128px"
		/>
	</Spacer>
</Card>
