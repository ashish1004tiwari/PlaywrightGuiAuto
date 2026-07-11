import { request } from 'node:http';
import CommonUtils from '../utils/CommonUtils'
import CommonUtilsApi from '../utils/CommonUtilsApi';
import {test as basetest} from './pom-fixture'

type CommonFixture = {
    commonUtils: CommonUtils,
    commonApiutils : CommonUtilsApi
}

export const test = basetest.extend<CommonFixture>({
    commonUtils: async ({}, use) => {
        await use(new CommonUtils());
    },

    commonApiutils: async({request},use) =>{
        use (new CommonUtilsApi(request));


    }
});