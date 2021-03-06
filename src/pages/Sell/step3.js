import React, { Component } from 'react';
import { Checkbox } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SellActions from '../../actions/sell-actions';

class Step3 extends Component {

	setData = (newData) => {
  	const { saveStep } = this.props.actions;
  	return saveStep('step3', newData);
  }

	handleAcceptTerms = (e) => {
		const value = e.target.checked;
		const newData = {
  		...this.props.data,
  		'acceptTerms': value
  	}
  	this.setData(newData);
	}

  render() {

  	const { data } = this.props;

    return (
      <div id="Step3">
        <div className="container">
      		<div className="row">
	        	<div className="col-md-8 col-md-offset-2">
	        		<h1>ข้อตกลงและเงื่อนไข</h1>
	        		<div className="form">
	        			ตรงกันข้ามกับความเชื่อที่นิยมกัน Lorem Ipsum ไม่ได้เป็นเพียงแค่ชุดตัวอักษรที่สุ่มขึ้นมามั่วๆ แต่หากมีที่มาจากวรรณกรรมละตินคลาสสิกชิ้นหนึ่งในยุค 45 ปีก่อนคริสตศักราช ทำให้มันมีอายุถึงกว่า 2000 ปีเลยทีเดียว ริชาร์ด แมคคลินท็อค ศาสตราจารย์ชาวละติน จากวิทยาลัยแฮมพ์เด็น-ซิดนีย์ ในรัฐเวอร์จิเนียร์ นำคำภาษาละตินคำว่า consectetur ซึ่งหาคำแปลไม่ได้จาก Lorem Ipsum ตอนหนึ่งมาค้นเพิ่มเติม โดยตรวจเทียบกับแหล่งอ้างอิงต่างๆ ในวรรณกรรมคลาสสิก และค้นพบแหล่งข้อมูลที่ไร้ข้อกังขาว่า Lorem Ipsum นั้นมาจากตอนที่ 1.10.32 และ 1.10.33 ของเรื่อง "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) ของ ซิเซโร ที่แต่งไว้เมื่อ 45 ปีก่อนคริสตศักราช หนังสือเล่มนี้เป็นเรื่องราวที่ว่าด้วยทฤษฎีแห่งจริยศาสตร์ ซึ่งเป็นที่นิยมมากในยุคเรเนสซองส์ บรรทัดแรกของ Lorem Ipsum "Lorem ipsum dolor sit amet.." ก็มาจากบรรทัดหนึ่งในตอนที่ 1.10.32 นั่นเอง
								ด้านล่างของหน้านี้คือท่อนมาตรฐานของ Lorem Ipsum ที่ใช้กันมาตั้งแต่คริสตศตวรรษที่ 16ที่ได้รับการสร้างขึ้นใหม่สำหรับผู้ที่สนใจ ประกอบไปด้วย ตอนที่ 1.10.32 และ 1.10.33 จากเรื่อง "de Finibus Bonorum et Malorum" โดยซิเซโร ก็ได้รับการผลิตขึ้นใหม่ด้วยเช่นกันในรูปแบบที่ตรงกับต้นฉบับ ตามมาด้วยเวอร์ชั่นภาษาอังกฤษจากการแปลของ เอช แร็คแคม เมื่อปี ค.ศ. 1914
	        		</div>
	        		<center>
	        			<Checkbox checked={data.acceptTerms} onChange={this.handleAcceptTerms}>ฉันยอมรับข้อตกลงนี้</Checkbox>
	        		</center>
	        	</div>
	        </div>
	      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.sell.step3,
  };
}

const actions = {
  saveStep: SellActions.saveStep,
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Step3);