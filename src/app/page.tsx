"use client";

import React from 'react';

import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Logo, Background } from '@/once-ui/components';
import { GlitchFx } from '@/once-ui/components/GlitchFx';
import styles from './GlitchFx.module.scss';
import Link from 'next/link';

export default function Home() {
	const links = [
		{
			href: "https://once-ui.com/docs/theming",
			title: "Themes",
			description: "Style your app in minutes.",
		},
		{
			href: "https://once-ui.com/docs/flexComponent",
			title: "Layout",
			description: "Build responsive layouts.",
		},
		{
			href: "https://once-ui.com/docs/typography",
			title: "Typography",
			description: "Scale text automatically.",
		},
	];

	return (
		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			<Background
				dots={false}/>
			<Flex
				position="relative"
				as="section" overflow="hidden"
				fillWidth minHeight="0" maxWidth={68}
				direction="column" alignItems="center" flex={1}>
				<Flex
					as="main"
					direction="column" justifyContent="center"
					fillWidth fillHeight padding="l" gap="l">
					<Flex
						mobileDirection="column"
						fillWidth gap="24">
						<Flex
							position="relative"
							flex={2} paddingTop="56" paddingX="xl">
							<Logo size="xl" icon={false} style={{zIndex: '1'}}/>
						</Flex>
						<Flex
							position="relative"
							flex={4} gap="24" marginBottom="104"
							direction="column">
							<InlineCode
								className="shadow-m"
								style={{
									width: 'fit-content',
									padding: 'var(--static-space-8) var(--static-space-16)',
									backdropFilter: 'blur(var(--static-space-1))'}}>
								Start by editing <span className="brand-on-background-medium">app/page.tsx</span>
							</InlineCode>
							<Heading
								wrap="balance"
								variant="display-strong-s">
								<span className="font-code">
								<GlitchFx
									speed="medium"
									interval={2500}
									trigger="instant"
									continuous
								>
									<Flex
										direction="column"
										padding="24"
										gap="8"
									>
										<Text variant="heading-strong-m">
										StellaX Technologies
										</Text>
										<Text
										onBackground="neutral-medium"
										marginBottom="16"
										>
										AI Web Browser with built in developer tools
										</Text>
										<Button size="s">
										Know more about Stella AI!
										</Button>
									</Flex>
								</GlitchFx>
								</span>
							</Heading>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
			<Flex
				as="footer"
				position="relative"
				fillWidth paddingX="l" paddingY="m"
				justifyContent="space-between">
				<Text
					variant="body-default-s" onBackground="neutral-weak">
					© 2024 StellaX Technologies, <Link href="https://github.com/once-ui-system/nextjs-starter?tab=MIT-1-ov-file">MIT License</Link>
				</Text>
				<Flex
					gap="12">
					<Button
						href="https://github.com/StellaX-Browser"
						prefixIcon="github" size="s" variant="tertiary">
						GitHub
					</Button>
					<Button
						href="https://discord.com/invite/5EyAQ4eNdS"
						prefixIcon="discord" size="s" variant="tertiary">
						Discord
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}
