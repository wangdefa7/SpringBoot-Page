package com.wdf.test.javabasic.http.client;
/**
 * 
 * @Package: com.wdf.test.javabasic.http.client
 * @ClassName: PostTest
 * @Description: post方法的测试类
 * @author: WDF
 * @date: 2020年5月6日 上午9:27:45
 * @version: V1.0
 */

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpEntity;
import org.apache.http.NameValuePair;
import org.apache.http.ParseException;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;


import com.alibaba.fastjson.JSON;
import org.junit.jupiter.api.Test;

public class PostTest {
	
	public String URL = "localhost";
	public int Port = 7777;

    /**
	 * POST---无参测试
	 *
	 * @date 2018年7月13日 下午4:18:50
	 */
	@Test
	public void doPostTestOne() {
 
		// 获得Http客户端(可以理解为:你得先有一个浏览器;注意:实际上HttpClient与浏览器是不一样的)
		CloseableHttpClient httpClient = HttpClientBuilder.create().build();
 
		// 创建Post请求
		HttpPost httpPost = new HttpPost("http://"+URL+":"+Port+"/doPostControllerOne");
		// 响应模型
		CloseableHttpResponse response = null;
		try {
			// 由客户端执行(发送)Post请求
			response = httpClient.execute(httpPost);
			// 从响应模型中获取响应实体
			HttpEntity responseEntity = response.getEntity();
 
			System.out.println("响应状态为:" + response.getStatusLine());
			if (responseEntity != null) {
				System.out.println("响应内容长度为:" + responseEntity.getContentLength());
				System.out.println("响应内容为:" + EntityUtils.toString(responseEntity));
			}
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				// 释放资源
				if (httpClient != null) {
					httpClient.close();
				}
				if (response != null) {
					response.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	/**post请求普通参数+对象参数的请求
	 * POST---有参测试(普通参数 + 对象参数)
	 *
	 * @date 2018年7月13日 下午4:18:50
	 */
	@Test
	public void doPostTestThree() {
 
		// 获得Http客户端(可以理解为:你得先有一个浏览器;注意:实际上HttpClient与浏览器是不一样的)
		CloseableHttpClient httpClient = HttpClientBuilder.create().build();
 
		// 创建Post请求
		// 参数
		URI uri = null;
		try {
			// 将参数放入键值对类NameValuePair中,再放入集合中
			List<NameValuePair> params = new ArrayList<>();
			params.add(new BasicNameValuePair("flag", "4"));
			params.add(new BasicNameValuePair("meaning", "这是什么鬼？"));
			// 设置uri信息,并将参数集合放入uri;
			// 注:这里也支持一个键值对一个键值对地往里面放setParameter(String key, String value)
			uri = new URIBuilder().setScheme("http").setHost(URL).setPort(Port)
					.setPath("/doPostControllerThree").setParameters(params).build();
		} catch (URISyntaxException e1) {
			e1.printStackTrace();
		}
 
		HttpPost httpPost = new HttpPost(uri);
		// HttpPost httpPost = new
		// HttpPost("http://localhost:12345/doPostControllerThree1");
 
		// 创建user参数
		User user = new User();
		user.setName("潘晓婷");
		user.setAge(18);
		user.setGender("女");
		user.setMotto("姿势要优雅~");
 
		// 将user对象转换为json字符串，并放入entity中
		StringEntity entity = new StringEntity(JSON.toJSONString(user), "UTF-8");
 
		// post请求是将参数放在请求体里面传过去的;这里将entity放入post请求体中
		httpPost.setEntity(entity);
 
		httpPost.setHeader("Content-Type", "application/json;charset=utf8");
 
		// 响应模型
		CloseableHttpResponse response = null;
		try {
			// 由客户端执行(发送)Post请求
			response = httpClient.execute(httpPost);
			// 从响应模型中获取响应实体
			HttpEntity responseEntity = response.getEntity();
 
			System.out.println("响应状态为:" + response.getStatusLine());
			if (responseEntity != null) {
				System.out.println("响应内容长度为:" + responseEntity.getContentLength());
				System.out.println("响应内容为:" + EntityUtils.toString(responseEntity));
			}
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				// 释放资源
				if (httpClient != null) {
					httpClient.close();
				}
				if (response != null) {
					response.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

}
