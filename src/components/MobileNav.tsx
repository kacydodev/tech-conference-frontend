import { ListIcon } from '@phosphor-icons/react';
import { DropdownMenu } from 'radix-ui';

function MobileNav() {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger className='debug'>
				<ListIcon size={28} />
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content className='debug w-screen h-screen bg-debug'>
					<DropdownMenu.Item>Item1</DropdownMenu.Item>
					<DropdownMenu.Item>Item2</DropdownMenu.Item>
					{/* <DropdownMenu.Separator />
					<DropdownMenu.Arrow /> */}
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
}
export default MobileNav;
