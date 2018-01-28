import { h, render, Component } from 'preact';
import Title from './components/title'
import List from './components/list'
import {fruits} from './data/fruits'

/** 
 * This is the entry file, which kicks off all rendering.
 */

/**
 *  This holds our rendered title element so we can re-render in response to HMR updates.
 */
let title;
let list


/**
 *  Making our app's initialization a function means it's repeatable.
 */
function init() {

	// Render the title:
	title = render(<Title message='World'/>, document.querySelector('header'), title);

	// Render fruit list:
	list = render(<List fruits={fruits} />, document.querySelector('section'), list)
}

// Initial render!
init();
