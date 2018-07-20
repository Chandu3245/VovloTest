import { FilterPipe } from "./filter.pipe";


describe('FilterPipe', () => {
    let sampleArray = [];
    let filter;
    beforeEach(()=>{
        sampleArray = ['hello', 'hai', 'wonderful', 'awesome','not bad'];
        filter = new FilterPipe();

    })

    it('Should be length 2 if the filtering is on "h" ', () => {

        expect(filter.transform(sampleArray, 'h').length).toBe(2);
    })
    it('Should contain wonderful when filtered with  "won" ', () => {

        expect(filter.transform(sampleArray, 'won')).toEqual(['wonderful']);
    })
})