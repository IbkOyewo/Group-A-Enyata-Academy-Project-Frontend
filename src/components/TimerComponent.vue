<template>
    <div class="container">
      <div class="title">
        <h4>Timer Settings</h4>
      </div>
      <hr>
      <div class="set-divs">
         <h4>Set Time</h4>
          </div>
        <div class="set-time">
         
          <div class="custom-select me-5">
            <select name="minutes" id="minutes">
              <option value="0">00</option>
              <option value="1">01</option>
              <option value="2">02</option>
              <option value="3">03</option>
              <option value="4">04</option>
              <option value="5">05</option>
              <option value="6">06</option>
              <option value="7">07</option>
              <option value="8">08</option>
              <option value="9">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
              <option value="32">32</option>
              <option value="33">33</option>
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="42">42</option>
              <option value="43">43</option>
              <option value="44">44</option>
              <option value="45">45</option>
              <option value="46">46</option>
              <option value="47">47</option>
              <option value="48">48</option>
              <option value="49">49</option>
              <option value="50">50</option>
              <option value="51">51</option>
              <option value="52">52</option>
              <option value="53">53</option>
              <option value="54">54</option>
              <option value="55">55</option>
              <option value="56">56</option>
              <option value="57">57</option>
              <option value="58">58</option>
              <option value="59">59</option>
            </select>
          </div>
          <div class="custom-select">
            <select name="seconds" id="seconds">
              <option value="0">000</option>
              <option value="1">001</option>
              <option value="2">002</option>
              <option value="3">003</option>
              <option value="4">004</option>
              <option value="5">005</option>
              <option value="6">006</option>
              <option value="7">007</option>
              <option value="8">008</option>
              <option value="9">009</option>
              <option value="10">010</option>
              <option value="11">011</option>
              <option value="12">012</option>
              <option value="13">013</option>
              <option value="14">014</option>
              <option value="15">015</option>
              <option value="16">016</option>
              <option value="17">017</option>
              <option value="18">018</option>
              <option value="19">019</option>
              <option value="20">020</option>
              <option value="21">021</option>
              <option value="22">022</option>
              <option value="24">024</option>
              <option value="25">025</option>
              <option value="26">026</option>
              <option value="27">027</option>
              <option value="28">028</option>
              <option value="29">029</option>
              <option value="30">030</option>
              <option value="31">031</option>
              <option value="32">032</option>
              <option value="33">033</option>
              <option value="34">034</option>
              <option value="35">035</option>
              <option value="36">036</option>
              <option value="37">037</option>
              <option value="38">038</option>
              <option value="39">039</option>
              <option value="40">040</option>
              <option value="41">041</option>
              <option value="42">042</option>
              <option value="43">043</option>
              <option value="44">044</option>
              <option value="45">045</option>
              <option value="46">046</option>
              <option value="47">047</option>
              <option value="48">048</option>
              <option value="49">049</option>
              <option value="50">050</option>
              <option value="51">051</option>
              <option value="52">052</option>
              <option value="53">053</option>
              <option value="54">054</option>
              <option value="55">055</option>
              <option value="56">056</option>
              <option value="57">057</option>
              <option value="58">058</option>
              <option value="59">059</option>
            </select>
          </div>
        </div>
        <!-- <div class="set-application-closure-date">
          <h4>Set Test Expiration Date</h4>
          <input type="date" class="date">
        </div> -->
      <button class="save-btn">
         Save
      </button>
    </div>
</template>

<script>
export default {
  name: 'TimerComponent',
};
</script>

<style scoped>
.container {
  font-family: Lato;
  font-style: normal;
}

.title h4 {
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.4px;
  color: #4A4A4A;
}

.fs{
  font-size: 5px;
}
.set-divs {
  display: flex;
  justify-content: space-between;
  margin-top: 99px;
}
.set-divs h4 {
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: left;
}

select{
  border:none;
}

.set-time{
  display: flex;
}

.set-time h4 {
  margin-bottom: 20px;
}
input {
  margin-top: 20px;
  width: 215px;
  height: 44px;
}
.custom-select {
  width: 70px;
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
}
.save-btn {
  width: 127px;
  height: 38px;
  background: #7557d3;
  color: #ffffff;
  border: none;
  margin: auto;
  margin-top: 40px;
  text-align: center;
  padding-top: 5px;
}
</style>
