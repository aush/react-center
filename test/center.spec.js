import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Prefixer from 'inline-style-prefixer';
import Center from '../src/center';

describe('Center', () => {
  it('should exist', () => { expect(Center).to.be.ok; });

  it('should render', () => {
    const wrapper = shallow(<Center />);

    expect(wrapper).to.be.ok;
  });

  it('should pass a style prop', () => {
    const wrapper = shallow(<Center />);

    expect(wrapper.prop('style')).to.eql({
      alignContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'center',
    });
  });

  it('should pass a style prop with vendor prefixes', () => {
    const customUserAgent = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1468.0 Safari/537.36';
    const prefixer = new Prefixer({ userAgent: customUserAgent });

    const wrapper = shallow(<Center prefixer={prefixer} />);

    expect(wrapper.prop('style')).to.eql({
      alignContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      display: '-webkit-flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'center',
    });
  });
});
