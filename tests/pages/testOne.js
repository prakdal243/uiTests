/**
 * Created by daljeetsidhu on 09/11/2019.
 */
/**
 * Created by daljeetsidhu on 09/11/2019.
 */

import { Selector } from 'testcafe';

const weatherInput = Selector('#ls-c-search__input-label');




fixture `Getting Started 1st fixture`
    .page `http://www.bbc.co.uk/weather`;

test('BBC weather test', async(t) => {
    //async before a function means it will return a promise
    await t
    //the await makes javascript wait for the t promise to settle and then returns its result
        .click(weatherInput)
        .typeText(weatherInput,'se186ff')
        .click('.ls-c-search__submit')

});

/*
 test('Navigate to google images', async(t) => {
 await t
 });

 test('Navigate to shopping tab', async(t) => {
 await t
 });*/
