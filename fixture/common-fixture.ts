import CommonUtils from '../utils/CommonUtils'
import {test as basetest} from './pom-fixture'

type CommonFixture = {
    commonUtils: CommonUtils
}

export const test = basetest.extend<CommonFixture>({
    commonUtils: async ({}, use) => {
        await use(new CommonUtils());
    }
});