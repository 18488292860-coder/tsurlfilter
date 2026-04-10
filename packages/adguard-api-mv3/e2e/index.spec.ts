import {
    describe,
    expect,
    it,
} from 'vitest';

describe('Adguard API MV3', () => {
    /**
     * We expect the library to be imported in any browser extension context, not just the service worker.
     */
    it('Should not throw error on import outside of service worker', async () => {
        // eslint-disable-next-line import/extensions
        const { AdguardApi } = await import('../dist/adguard-api');
        // @ts-expect-error — bundled JS loses optional param info; params is optional in source
        const adguardApi = await AdguardApi.create();

        expect(adguardApi).toBeDefined();
    });
});
