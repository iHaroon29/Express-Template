import chai from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)
const expect = chai.expect

describe('Test API', () => {
  describe('Get /health', () => {
    it('should handle user registration', (done) => {
      chai
        .request('http://localhost:5500')
        .get('/health')
        .end((err, res) => {
          if (err) {
            expect(res).to.have.status(500)
            expect(res.body)
              .to.have.property('message')
              .that.is.equal('An error occurred!!')
          } else {
            expect(res).to.have.status(200)
            expect(res.body).to.have.property('message').equal('Healthy :)')
          }
          done()
        })
    })
  })
})
