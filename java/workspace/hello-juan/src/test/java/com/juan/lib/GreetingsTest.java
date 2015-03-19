package com.juan.lib;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class GreetingsTest {
	ByteArrayOutputStream myOut;
	PrintStream stdOut;

	@Before
	public void setUp() {
		System.out.println("before");
		myOut= new ByteArrayOutputStream();
		stdOut = System.out;
		System.setOut(new PrintStream(myOut));
	}

	@After
	public void tearDown() {
		System.setOut(stdOut);
		System.out.println("after");
	}

	@Test
	public void testSayHello() throws Exception {
		String s = "Juan";
		new Greetings().sayHello(s);
		myOut.close();
		String standardOutput = myOut.toString();
		assertEquals("Hello Juan" + System.getProperty("line.separator"), standardOutput);
	}

	@Test
	public void test2() throws Exception {
		System.out.println("test2");
		assertEquals(1, 1);
	}

}
