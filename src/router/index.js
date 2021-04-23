import { createWebHashHistory, createRouter } from 'vue-router';

import Parent from '../components/Parent';
import Counter from '../components/Counter';
import Greet from '../components/Greet';
import Number from '../components/Number';
import Slots from '../components/Slots';

// 1. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
	{ path: '/todo', name: 'todo', component: Parent },
	{
		path: '/autoCounter',
		name: 'autoCounter',
		component: () => import('../components/AutoCounter'),
	},
	{ path: '/counter', name: 'counter', component: Counter },
	{
		path: '/greet/:username/:id',
		name: 'Greet',
		component: Greet,
	},
	{ path: '/number', name: 'number', component: Number },
	{ path: '/slots', name: 'slots', component: Slots },
];

// 2. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = createRouter({
	// 3. Provide the history implementation to use. We are using the hash history for simplicity here.
	history: createWebHashHistory(),
	routes, // short for `routes: routes`
});
