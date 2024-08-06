import Logo from "./Logo";

import { RenderTest } from "../../utils/test-helpers";

describe('Logo components test suite', () => {
    RenderTest('Logo renders without crashing',<Logo />)    
})