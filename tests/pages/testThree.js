/**
 * Created by daljeetsidhu on 09/11/2019.
 */

import { Selector } from 'testcafe';

fixture `Getting Started 1st fixture`
    .page `http://www.bbc.co.uk`;

test('Assert BBC homepage', async(t) => {
    //async before a function means it will return a promise
    await t
    //the await makes javascript wait for the t promise to settle and then returns its result
        .expect('#orb-header'.exists)
});


