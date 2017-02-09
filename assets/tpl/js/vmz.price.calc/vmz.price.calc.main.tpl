	<div class="kalk_form_cont_back">
		<div id="kalk_form_cont">
			<h1>КАЛЬКУЛЯТОР СТОИМОСТИ</h1>
			<p class="error"></p>
			<form method="post" id="kalk_form">
				<table>
					<tbody>
						<tr>
						<td class="kalk_form_table_lf"><label>Производитель</label></td>
						<td><select id="calc_manuf" name="calc_manuf" class="formField_kalk">
						<option value="1">Бельгия («Polyplast», ПВХ)</option>
						<option value="2">Германия («Descor», Ткань)</option>
						<option value="3">Германия («Pongs», ПВХ)</option>
						<option value="4">Россия (Казань, ПВХ)</option>
						</select></td>
						</tr>
						<tr>
						<td class="kalk_form_table_lf"><label>Площадь помещения, м<sup>2</sup> <p>(разделителем должна быть точка ".") *</p></label></td>
						<td><input id="calc_square" class="formField_kalk" name="calc_square" value="" type="text"></td>
						</tr>
						<tr>
						<td class="kalk_form_table_lf"><label>Количество углов <span>(до 4 - бесплатно) *</span></label></td>
						<td><input id="calc_corner" class="formField_kalk" name="calc_corner" value="" type="text"></td>
						</tr>
						<tr>
						<td class="kalk_form_table_lf"><label>Количество трубопроводов *</label></td>
						<td><input id="calc_trub" class="formField_kalk" name="calc_trub" value="" type="text"></td>
						</tr>
						<tr>
						<td class="kalk_form_table_lf"><label>Количество люстр *</label></td>
						<td><input id="calc_lustr" class="formField_kalk" name="calc_lustr" value="" type="text"></td>
						</tr><tr>
						<td class="kalk_form_table_lf"><label>Количество точечных светильников *</label></td>
						<td><input id="calc_svetil" class="formField_kalk" name="calc_svetil" value="" type="text"></td>
						</tr>
						<tr>
						<td class="kalk_form_table_lf"><label>Плинтус (м.п.) *</label></td>
						<td><input id="calc_plintus" class="formField_kalk" name="calc_plintus" value="" type="text"></td>
						</tr>
					</tbody>
				</table>
				<div class="formbutton_kalk_cont">
					<input class="formbutton_kalk" value="Рассчитать стоимость" type="submit">
					<p class="hidurlfield">Не заполняйте это поле: <input type="text" id="calc_url" name="url" placeholder="Не заполняйте это поле!" value=""></p>
				</div>
			</form>
			<table id="kalk_form_results">
				<tbody><tr><td>Полная стоимость установки потолков: </td><td class="kalk_form_results_sum"></td></tr></tbody>		
			</table>
			<div class="kalk_form_send_contacts_cont">
				<div class="kalk_form_send_contacts">
					<div class="obratniy-zvonok-title">
						<div id="kalk_form_send_contacts-title">Вызов замерщика</div>
						<p id="kalk_form_send_contacts-bot"></p>
						<div class="obratniy-zvonok-content">
							<form id="sendCalcContactsBottomForm" method="post">
								<fieldset>
									<input type="hidden" id="calc_conts_send_manuf" name="calc_conts_send_manuf" value="">
									<input type="hidden" id="calc_conts_send_square" name="calc_conts_send_square" value="">
									<input type="hidden" id="calc_conts_send_corner" name="calc_conts_send_corner" value="">
									<input type="hidden" id="calc_conts_send_trub" name="calc_conts_send_trub" value="">
									<input type="hidden" id="calc_conts_send_lustr" name="calc_conts_send_lustr" value="">
									<input type="hidden" id="calc_conts_send_svetil" name="calc_conts_send_svetil" value="">
									<input type="hidden" id="calc_conts_send_plintus" name="calc_conts_send_plintus" value="">
									<input type="hidden" id="calc_conts_send_sum" name="calc_conts_send_sum" value="">
									<input class="formfield" id="calc_contacts_name" name="calc_contacts_name" minlength="2" value="[[!+fi.calc_contacts_name]]" required="required" type="text" placeholder="Ваше имя">
									<span class="error">[[!+fi.error.calc_contacts_name]]</span>
									<input class="formfield" id="calc_contacts_phone" name="calc_contacts_phone" value="[[!+fi.calc_contacts_phone_NA_format]]" required="required" type="text" placeholder="Ваш телефон">
									<span class="error">[[!+fi.error.calc_contacts_phone_NA_format]]</span>
									<input class="formbutton" value="Вызвать замерщика" type="submit">
									<p class="hidurlfield">Не заполняйте это поле: <input type="text" id="calc_contacts_url" name="url" placeholder="Не заполняйте это поле!" value=""></p>
								</fieldset>
							</form>
						</div>
					</div>
				</div>
				<div class="wrap-40px"></div>
			</div>
		</div>
	</div>
	