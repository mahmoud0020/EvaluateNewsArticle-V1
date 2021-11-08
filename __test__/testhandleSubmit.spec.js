import "babel-polyfill";

import {handleSubmit} from '../src/client/js/formHandler';

describe("Test HandleSubmit function !",()=>{
    test("Testing the handle submit function ",()=>{
    expect(handleSubmit).toBeDefined();

    })
})