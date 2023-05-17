<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do banco de dados
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Configurações do banco de dados - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define('WP_CACHE', true);
define( 'WPCACHEHOME', 'C:\xampp\htdocs\cursowp\wordpress\wp-content\plugins\wp-super-cache/' );
define( 'DB_NAME', 'cursoemvideo' );

/** Usuário do banco de dados MySQL */
define( 'DB_USER', 'root' );

/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', '1234' );

/** Nome do host do MySQL */
define( 'DB_HOST', 'localhost:3308' );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define( 'DB_COLLATE', '' );

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'HSM>ivGmE$6.wCM3v;P6KM_-I$0iMUf;KO(y!h*JT?fAG~L$W7F*SJ2lT(;^cD5&' );
define( 'SECURE_AUTH_KEY',  'j{~6xb>Hv,ugi(Rbm{Hy3~4p@@ qgq|muzwINivTyONx-BZ6E#&hcMB`VV+Jy!*,' );
define( 'LOGGED_IN_KEY',    'U 7X*H%vP/81SuN3H`=D,PE{D:C9%#GLZGuR@e9k)E$~:[ipZjd4h<mXrM{!~8us' );
define( 'NONCE_KEY',        'hlWH/Y|N5:kj^{4tQWl/%?<E.hmxI,K@+GLtgW5<S[Ho Mq8m/X~/A@K3;0 4>^5' );
define( 'AUTH_SALT',        'TQi(AfsYB& Hz?FlO3o$^pvDV{57sI0m^*1%~4P Dl*&9ZHv+_.}wn9 voOOau!i' );
define( 'SECURE_AUTH_SALT', 'o=Y:gGJn|+|`[(!iwMB1EdPtuR|8]q3Di_NxbJRf4BDtS?S/[?~;bP2wwPcu[8$h' );
define( 'LOGGED_IN_SALT',   'G%-O%tw2lbWuhJYz>g%<hY&[dQzr2*kSDkDQ6pt?kp0B31REO?{7F@QFYu[syg@N' );
define( 'NONCE_SALT',       '+c_TM|!}lt7y,{#89@Zu7:nQJ:(z$y#ZRNvP<^RVc5m6TZ3*_CG0#mz^Y%zu]4*!' );

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Adicione valores personalizados entre esta linha até "Isto é tudo". */



/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';
