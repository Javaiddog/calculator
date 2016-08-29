'use strict';
angular.module('calculatorApp')
    .service('normalCalService', function() {
        var self = this;

        /*记录显示屏第一、二行内容，分别初始化为“空、0”*/
		self.inputs = "";
		self.results = "0";
		/*记录是否有等号*/
		self.equalFlag = 0;
		/*记录当前输入是数字还是运算符*/
		self.typeInFlag = 0;
		
		/*记录传入的运算符号*/
		self.symbol = null;

		/*滑动按钮点击事件*/
		self.slipFlag = true;
		self.slip = function() {
			self.results = "0"
			return self.slipFlag = !self.slipFlag;
		};

		/*clear按钮点击事件*/
		self.clear = function() {
			self.results = "0";
			self.typeInFlag = 0;
		}
                  
		/*delete按钮点击事件*/
		self.delete = function() {
			self.results = self.results.substring(0, self.results.length - 1);
		}
    });