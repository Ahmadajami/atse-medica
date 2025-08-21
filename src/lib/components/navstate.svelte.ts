let isOpen = $state(false);

export function getNavState() {
	return isOpen;
}

export function toggleNavState() {
	isOpen = !isOpen;
}
export function CloseNavState() {
	isOpen = false;
}
