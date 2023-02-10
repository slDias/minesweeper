import mock from "./mock"
import real from "./real"

const api = process.env.MOCK_API === 0 ? real : mock
export default api