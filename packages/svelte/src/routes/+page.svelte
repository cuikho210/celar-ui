<script lang="ts">
	import IconButton from '$lib/buttons/IconButton.svelte';
	import {
		Container,
		Spacer,
		Card,
		Breadcrumb,
		Avatar,
		DuckSpinner,
		TextButton,
		ElevatedButton,
		FilledButton,
		OutlinedButton,
		Gap
	} from '$lib/index.js';
	import HugeiconsInLove from '~icons/hugeicons/in-love';
</script>

<Container sm>
	<Breadcrumb>
		<a href="/">Home</a>
		<a href="/">Components</a>
		<a href="/">Preview</a>
	</Breadcrumb>
	<Gap />

	<Card>
		<h3>Buttons</h3>
		<Gap />
		<Spacer>
			<TextButton>Text</TextButton>
			<ElevatedButton>Elevated</ElevatedButton>
			<FilledButton>Filled</FilledButton>
			<OutlinedButton>Outlined</OutlinedButton>
			<IconButton><HugeiconsInLove font-size="20px" /></IconButton>
		</Spacer>
	</Card>
	<Gap />

	<Card>
		<h3>Spinner</h3>
		<Gap />
		<Spacer align="center">
			<DuckSpinner size="24" />
			<DuckSpinner size="48" thin />
		</Spacer>
	</Card>
	<Gap />

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
</Container>
