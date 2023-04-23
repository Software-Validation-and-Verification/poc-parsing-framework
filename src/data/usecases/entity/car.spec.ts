import { Car } from './car'
const makeSut = (name: string,brand: string): { sut: Car} => {
    	return { sut: new Car(name,brand) }
    }
describe('Car class', () => { 
    describe('run method', () => { 

      	const name = 'any_name'
	const brand = 'any_brand'
	const sound = 'any_sound'

      	test('ensure run method returns a lambo related value if brand is lambo', async () => {
        const { sut } = makeSut(name,'lambo')
        let result = sut.run(sound)
        expect(result).toBe(`${name}says:${sound}!`)
        })


 
 ,	test('ensure run method returns a toyota related value if brand is toyota', async () => {
        const { sut } = makeSut(name,'toyota')
        let result = sut.run(sound)
        expect(result).toBe(`${name}says:${sound}!`)
        })


 ,	test('ensure run method returns a mazda related value if brand is mazda', async () => {
        const { sut } = makeSut(name,'mazda')
        let result = sut.run(sound)
        expect(result).toBe(`${name}says:${sound}!`)
        })


 ,	test('ensure run method returns a ferrari related value if brand is ferrari', async () => {
        const { sut } = makeSut(name,'ferrari')
        let result = sut.run(sound)
        expect(result).toBe(`${name}says:${sound}!`)
        })


 ,	test('ensure run method does not return a ferrari related value if brand is not ferrari', async () => {
        const { sut } = makeSut(name,brand)
        let result = sut.run(sound)
        expect(result).toBe(`${name}says:${sound}raaar!`)
        })

 }) 
    describe('run2 method', () => { 

      	const name = 'any_name'
	const brand = 'any_brand'
	const sound = 'any_sound'

      	test('ensure run2 method returns a lambo related value if brand value is lambo', async () => {
          const { sut } = makeSut(name,'lambo')
          let result = sut.run2(sound)
          expect(result).toBe(`${name}says:${sound}!`)
          })


 
 ,	test('ensure run2 method returns a toyota related value if brand value is toyota', async () => {
          const { sut } = makeSut(name,'toyota')
          let result = sut.run2(sound)
          expect(result).toBe(`${name}says:${sound}!`)
          })


 ,	test('ensure run2 method returns a mazda related value if brand value is mazda', async () => {
          const { sut } = makeSut(name,'mazda')
          let result = sut.run2(sound)
          expect(result).toBe(`${name}says:${sound}!`)
          })


 ,	test('ensure run2 method returns a ferrari related value if brand value is ferrari', async () => {
          const { sut } = makeSut(name,'ferrari')
          let result = sut.run2(sound)
          expect(result).toBe(`${name}says:${sound}!`)
          })


 ,	test('ensure run2 method returns a default related value if brand value is '+`${brand}`, async () => {
        const { sut } = makeSut(name,'dummyrandomvalue')
        let result = sut.run2(sound)
        expect(result).toBe(`${name}says:${sound}defaultsound!`)
        })

 }) 

 }) 

