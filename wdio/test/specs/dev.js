describe('wdio - getValue - Appium', function () {
    it('should set and get value of an input field', () => {
        browser.url('http://google.com');

        const input = $('input[type="search"]');
        const text = 'WDIO';

        input.setValue(text);

        browser.pause(1000);

        expect(input.getValue()).to.equal(text);
    });
});
